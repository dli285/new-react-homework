import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
            <form className="welcome__form">
              <label className="input-wrapper" htmlFor="username">
                Ваше имя
                <input
                  required
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Ваш ответ"
                />
                <span id="error-message">
                  Введите номер в правильном формате например
                </span>
              </label>
              <label className="input-wrapper" htmlFor="username">
                Ваш номер
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+998 9- --- -- -- "
                  pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
                />
                <span id="error-message">Введите номер в правильном формате</span>
              </label>
              <button disabled type="submit" id="next-btn">Далее</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
