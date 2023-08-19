import React from "react";

export const AppInput = (
    { 
        id, 
        labelText, 
        isRequired, 
        type, 
        name, 
        placeholderText,
        errorText,
        pattern
    }
) => {
    return (
      <label className="input-wrapper" htmlFor={id}>
        {labelText}
        <input
          required={isRequired}
          type={type}
          name={name}
          id={id}
          placeholder={placeholderText}
          pattern={pattern}
        />
        <span id="error-message">
          {errorText}
        </span>
       </label>
    )
}