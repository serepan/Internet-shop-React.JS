import React from 'react';

const ButtonElement = ({ title, onClick }) => {

    return (
        <button className="button" onClick={onClick}>{title}</button>
    )
}

export default ButtonElement;