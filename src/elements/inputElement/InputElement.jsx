import React from 'react';


const InputElement = ({ id, placeholder, label, type, onInput }) => {

    return (
        <div className="input">
            <label htmlFor={id}> {label} </label>
            <input type={type} id={id} placeholder={placeholder} onInput={onInput} />
        </div>

    )
}

export default InputElement;