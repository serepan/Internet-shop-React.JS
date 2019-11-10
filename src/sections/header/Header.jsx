import React, { useEffect, useState } from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [count, setCount] = useState('0')

    useEffect(() => {
        setCount(JSON.parse(localStorage.getItem('count')))
    })

    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="images/pizzeria-logo.png" alt="" />
                </div>

                <Link to='/Cart' className="cart"></Link>
                <span className="cart_count">{count}</span>



            </div>
        </header>
    )
}

export default Header;
