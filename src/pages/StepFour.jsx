import React, { useState, useEffect } from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { NumericAnswerItem } from "../components/NumericAnswerItem";
import { AppButton } from "../components/AppButton";

const StepFour = ({onGoNextPage}) => {
  const [checkedItem3,setCheckedItem3] = useState(null)

  const answerOptions = [
    {
      id: 'numeric-answer-1',
      answerText: 1
    },
    {
      id: 'numeric-answer-2',
      answerText: 2
    },
    {
      id: 'numeric-answer-3',
      answerText: 3
    },
    {
      id: 'numeric-answer-4',
      answerText: 4
    },
    {
      id: 'numeric-answer-5',
      answerText: 5
    }
  ]
  useEffect ( () => {
    const rawUserData = localStorage.getItem('userData4');
    if (rawUserData) {
      const userData = JSON.parse(rawUserData);
      setCheckedItem3(userData.id);
    }
  }, [])
  
  const submitForm = () => {
    const userData = answerOptions.find(answerItem => answerItem.id === checkedItem3);
    if (userData) {
      localStorage.setItem('userData4', JSON.stringify(userData));
    }

    onGoNextPage();
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={4} />
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос"/>
            <ul className="level-variants">
              {answerOptions.map(answerItem => (
                <NumericAnswerItem 
                  key={answerItem.id} 
                  id={answerItem.id} 
                  answerText={answerItem.answerText} 
                  isChecked={checkedItem3 === answerItem.id}
                  onChange={() => setCheckedItem3(answerItem.id)}
                />
              ))}
            </ul>
            <AppButton
             id="next-button"
             isDisabled={!checkedItem3}
             type="submit"
             buttonText="Завершить"
             onClick={submitForm}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;
