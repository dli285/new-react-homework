import React, { useState } from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const StepOne = ({onGoNextPage}) => {
const [userAnswer,setUserAnswer] = useState(null)

const isNext1ButtonDisabled = !userAnswer

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator />
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
            <AppInput  
                isRequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                errorText=" Введите номер в правильном формате например"
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <AppButton 
               isDisabled={isNext1ButtonDisabled} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
