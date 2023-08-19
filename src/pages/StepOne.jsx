import React from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const StepOne = (onGoNextPage) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description"
                >Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
            <AppInput  
                isRequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                errorText=" Введите номер в правильном формате например"
            />
            <AppButton 
               isDisabled={true} 
               type="submit" 
               id="next-btn" 
               buttonText="Далее"
               onclick={() => onGoNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
