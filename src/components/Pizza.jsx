import React from 'react';
import '../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonElement from '../elements/ButtonElement/ButtonElement';

const Pizza = ({ pizza, setCurrentPizza }) => {
    let productsArr = JSON.parse(localStorage.getItem('productsArr')) || [];
    let productsPrice = JSON.parse(localStorage.getItem('productsPrice')) || [];
    let count = productsArr.length+1;

    const addToCart = () => {
        setCurrentPizza(pizza);
        productsArr.push(pizza)
        productsPrice.push(pizza.price)
        localStorage.setItem('productsArr', JSON.stringify(productsArr))
        localStorage.setItem('productsPrice', JSON.stringify(productsPrice))
        localStorage.setItem('count', JSON.stringify(count))
    }

    return (
        <div className="pizza__item-wrapper col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="pizza__item">
                <h3>{pizza.name}</h3>
                <div className="pizza__item-img">
                    <img src={pizza.img} alt="pizza" />
                </div>
                <h5>{pizza.price} грн.</h5>
                <div className="pizza__item-hover">
                    <h4>Состав: {pizza.composition.join(', ')}</h4>
                    <h4>{pizza.caloricity} cal</h4>
                </div>
                <div className="button_element">
                    <ButtonElement
                        onClick={addToCart}
                        title='В корзину'
                    />
                </div>
            </div>
        </div>
    )
}

export default Pizza;