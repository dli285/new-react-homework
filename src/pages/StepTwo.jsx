import React, {useState, useEffect} from "react";
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
  useEffect ( () => {
    const rawUserData = localStorage.getItem('userData2');
    if (rawUserData) {
      const userData = JSON.parse(rawUserData);
      setCheckedItem(userData.id);
    }
  }, [])
  
  const submitForm = () => {
    const userData = answerTypes.find(answerItem => answerItem.id === checkedItem);
    if (userData) {
      localStorage.setItem('userData2', JSON.stringify(userData));
    }

    onGoNextPage();
  };

  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <Indicator progress={2}/>
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
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo;
