import React, {useState} from "react";
import { AppButton } from "../components/AppButton";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header"
import { VariantAnswerItem } from "../components/VariantAnswerItem";

const StepThree = ({onGoNextPage}) => {
  const [checkedItem2, setCheckedItem2] = useState(null)

  const answerVariants = [
    {
      id: 'variant-1',
      text: 'Ваш ответ 1',
      imgSrc: './img/laugh.png',
      alt:'laugh'
    },
    {
      id: 'variant-2',
      text: 'Ваш ответ 2',
      imgSrc: './img/hearts.png',
      alt:'hearts'
    },
    {
      id: 'variant-3',
      text: 'Ваш ответ 3',
      imgSrc: './img/smirk.png',
      alt:'smirk'
    },
    {
      id: 'variant-4',
      text: 'Ваш ответ 4',
      imgSrc: './img/fright.png',
      alt:'fright'
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator />
          <div className="question">
            <Header type="h2" headerText="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {
                answerVariants.map( answerItem => (
                  <VariantAnswerItem 
                  key={answerItem.id}
                  id={answerItem.id} 
                  answerText={answerItem.text} 
                  isChecked={checkedItem2 === answerItem.id}
                  imgSrc={answerItem.imgSrc}
                  onChange={() => setCheckedItem2(answerItem.id)}
                  />
                ))
              }
            </ul>
            <AppButton 
               isDisabled={!checkedItem2} 
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

export default StepThree;
