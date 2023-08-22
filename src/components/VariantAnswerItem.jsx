import React from "react";

export const VariantAnswerItem = ({ answerText,name,id,alt,imgSrc,isChecked,onChange }) => {
    return (
        <li className="variant-wrapper">
            <input required type="radio" 
              name={name} 
              id={id} 
              checked={isChecked}
              onChange={onChange}
            />
            <label htmlFor={id}>
            <img src={imgSrc} alt={alt} />
            <p>{answerText}</p>
            </label>
        </li>
    )
}