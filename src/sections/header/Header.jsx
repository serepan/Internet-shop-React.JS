import React, { useEffect, useState } from 'react';
import './../../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from '../../components/CartIcon';


const Header = ({ count, setCount, arrOfPizzas }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="images/pizzeria-logo.png" alt="" />
                </div>

                <CartIcon
                    arrOfPizzas={arrOfPizzas}
                    count={count}
                    setCount={setCount}
                />
            </div>
        </header>
    )
}

export default Header;
