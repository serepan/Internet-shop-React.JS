import React from 'react';


const InputElement = ({ id, placeholder, label, type, onInput, onChange }) => {

    return (
        <div className="input">
            <label htmlFor={id}> {label}</label>
            <input type={type} id={id} placeholder={placeholder} onInput={(e) => onInput(e)}/>
        </div>

    )
}

export default InputElement;