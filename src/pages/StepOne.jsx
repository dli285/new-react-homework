import React, { useEffect, useState } from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const StepOne = ({onGoNextPage}) => {
const [userAnswer,setUserAnswer] = useState(null)

const [userAnswerError, setUserAnswerError] = useState(false)

useEffect( () => {
  const rawUserData=localStorage.getItem('userData1')
  const { userAnswer }=JSON.parse(rawUserData)

  if (userAnswer) {
    setUserAnswer(userAnswer)
  }
}, [])

const hasErrors= userAnswerError
const isNext1ButtonDisabled = !userAnswer || hasErrors

const validateUserAnswer = (e) => {
  const regex1= /^[a-zA-Zа-яА-Я]+$/;

  if (regex1.test(e.target.value)) {
    if (userAnswerError) {
      setUserAnswerError(false)
     }
    } else{
      setUserAnswerError(true)
    }

  setUserAnswer(e.target.value)

}
const submitForm = () => {
  const userData = {
    userAnswer:userAnswer
  }

  if (userAnswer) {
    localStorage.setItem('userData1', JSON.stringify(userData))
  }
  onGoNextPage()
}
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={1} />
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
            <AppInput  
                isRzequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                errorText=" Введите номер в правильном формате например"
                onChange={validateUserAnswer}
                hasError={userAnswerError}
                value={userAnswer}
            />
            <AppButton 
               isDisabled={isNext1ButtonDisabled} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onClick={submitForm}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
