import React, {useEffect, useState} from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = ({ onGoNextPage }) => {
  const[userName, setUsername] = useState(null)
  const[userPhone, setUserphone] = useState(null)
  //validation для полей
  const[userNameError, setUserNameError] = useState(false)
  const[userPhoneError, setUserPhoneError] = useState(false)

  useEffect ( () => {
    const rawUserData = localStorage.getItem('userData')
    const { userName, userPhone} = JSON.parse(rawUserData)

    if (userName) {
      setUsername(userName)
    }

    if (userPhone) {
      setUserphone(userPhone)
    }
  }, [])

  const hasErrors = userNameError || userPhoneError
  const isNextButtonDisabled = !userName || !userPhone || hasErrors

  const validateUserName = (e) => {
    const regex = /^[a-zA-Zа-яА-Я]+$/;

    if (regex.test(e.target.value)) {
      if (userNameError) {
        setUserNameError(false)
      }
    } else {
      setUserNameError(true)
    }

    setUsername(e.target.value)
  }

  const validateUserPhone = (e) => {
    const regex = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

    if (regex.test(e.target.value)) {
      if (userPhoneError)
        setUserPhoneError(false)
    } else {
        setUserPhoneError(true)
    }

    setUserphone(e.target.value)
  }

  const submitForm = () => {
    const userData = {
      userName: userName,
      userPhone: userPhone
    }

    if (userName && userPhone) {
      localStorage.setItem('userData', JSON.stringify(userData))
    }

    onGoNextPage()
  }

  return (
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <Header type="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
            <form className="welcome__form">
              <AppInput 
                id="username" 
                isRequired={true}
                name="username"
                type="text"
                labelText="Ваше имя"
                placeholderText="Ваш ответ"
                errorText="Имя должно содержать только буквы"
                onChange={validateUserName}
                hasError={userNameError}
                value={userName}
                />
              <AppInput 
                id="phone"
                isRequired={true}
                name="phone"
                type="tel"
                labelText="Ваш номер"
                placeholderText="+998 9- --- -- -- "
                errorText="Введите номер в правильном формате"
                onChange={validateUserPhone}
                hasError={userPhoneError}
                value={userPhone}
                />
              <AppButton 
               isDisabled={isNextButtonDisabled} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onClick={submitForm}
              />
            </form>
          </div>
        </div>
      </div>
  )
}

export default Welcome;
