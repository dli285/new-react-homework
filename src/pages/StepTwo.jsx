import React, {useState} from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { ListedAnswerItem } from "../components/ListedAnswerItem";

const StepTwo = ({onGoNextPage}) => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerTypes = [
    {
      id: 'variant=1',
      text: 'Ваш ответ1',
    },
    {
      id: 'variant=2',
      text: 'Ваш ответ2'
    },
    {
      id: 'variant=3',
      text: 'Ваш ответ3'
    },
    {
      id: 'variant=4',
      text: 'Ваш ответ4'
    }
  ]

  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <Indicator />
        <div className="question">
        <Header type="h2" headerText="2. Занимательный вопрос"/>
          <ul className="variants">
            {
              answerTypes.map(answerItem => (
                <ListedAnswerItem 
                 key={answerItem.id}
                 id={answerItem.id} 
                 answerText={answerItem.text} 
                 isChecked={checkedItem === answerItem.id}
                 onChange={() => setCheckedItem(answerItem.id)}
                />
              ))
            }
          </ul>
          <AppButton 
            isDisabled={!checkedItem} 
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

export default StepTwo;
