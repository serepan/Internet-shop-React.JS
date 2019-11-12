import React, { useEffect, useState } from 'react';
import './../../scss/App.scss';
// import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from '../../components/CartIcon';
// import { Link } from 'react-router-dom';

const Header = ({ count, setCount, arrOfPizzas}) => {

    // const [count, setCount] = useState('0')


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
