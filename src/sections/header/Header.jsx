import React from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';
// import { Router, Link } from 'react-router-dom';

const Header = () => {

    return (
        // <Router>
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="images/pizzeria-logo.png" alt="" />
                </div>
                <div className="cart">
                    {/* <Link to="">To cart</Link> */}
                    <ButtonElement
                    title='to cart' />
                </div>
                
            </div>
        </header>
        // </Router>
    )
}

export default Header;
