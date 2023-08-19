import React from "react";

export const ListedAnswerItem = ({ id, isChecked, answerText }) => {
    return (
        <li className="variant-wrapper">
            <input required type="radio" name="variant" id={id} />
            <label htmlFor={id}>{answerText}</label>
        </li>
    )
}