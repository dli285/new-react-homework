import React from "react";

const StepTwo = () => {
  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <div className="indicator">
          <div className="indicator__text">
            <span className="indicator__description"
              >Скидка за прохождение опроса:
            </span>
            <span className="indicator__value">15%</span>
          </div>
          <div className="indicator__progressbar">
            <div className="indicator__unit indicator__unit-1 _active"></div>
            <div className="indicator__unit indicator__unit-2"></div>
            <div className="indicator__unit indicator__unit-3"></div>
            <div className="indicator__unit indicator__unit-4"></div>
          </div>
        </div>
        <div className="question">
          <h2>1. Занимательный вопрос</h2>
          <ul className="variants">
            <li className="variant-wrapper">
              <input required type="radio" name="variant" id="variant-1" />
              <label htmlFor="variant-1">Ваш ответ</label>
            </li>
            <li className="variant-wrapper">
              <input required type="radio" name="variant" id="variant-2" />
              <label htmlFor="variant-2">Ваш ответ</label>
            </li>
            <li className="variant-wrapper">
              <input required type="radio" name="variant" id="variant-3" />
              <label htmlFor="variant-3">Ваш ответ</label>
            </li>
            <li className="variant-wrapper">
              <input required type="radio" name="variant" id="variant-4" />
              <label htmlFor="variant-4">Ваш ответ</label>
            </li>
          </ul>
          <button disabled id="next-btn">Далее</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo;
