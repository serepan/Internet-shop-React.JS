import React, { useState } from 'react';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';


const Cart = () => {

    let productsArr = JSON.parse(localStorage.getItem('productsArr')) || [];
    let count = JSON.parse(localStorage.getItem('count'))
    let productsPrice = JSON.parse(localStorage.getItem('productsPrice')) || [];
    let totalPrice = productsPrice.length ? productsPrice.reduce((a, b) => a + b) : 0;
    const [currentPizza, setCurrentPizza] = useState({ ...productsArr[0] })

    const removeFromCart = (e) => {
        setCurrentPizza(e.target);
        totalPrice -= currentPizza.price;
        productsPrice.splice(currentPizza, 1);
        productsArr.splice(currentPizza, 1);
        if (count > 0) {
            --count
        } else count = 0;
        localStorage.setItem('productsPrice', JSON.stringify(productsPrice))
        localStorage.setItem('productsArr', JSON.stringify(productsArr))
        localStorage.setItem('count', JSON.stringify(count))

    }

    return (<div className="cart__order">
        <div className="container">
            <div className="cart__order_title">
                <h1>Ваши покупки</h1>
            </div>
            <div className="row">
                {[...productsArr].map((pizza, index) => {
                    return (
                        <div className="pizza__item-wrapper col-12 col-sm-6 col-md-4 col-lg-3" key={index + 22}>
                            <div className="pizza__item">
                                <h3>{pizza.name}</h3>
                                <div className="pizza__item-img">
                                    <img src={pizza.img} alt="pizza image" />
                                </div>
                                <h5>{pizza.price} грн.</h5>
                                <div className="button_element">
                                    <ButtonElement
                                        onClick={removeFromCart}
                                        title='Убрать из корзины'
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="total_count">
                <h1>Общее количество: {count}</h1>
            </div>
            <div className="total_price">
                <h1>Общая сумма: {totalPrice}</h1>
            </div>
        </div>
    </div>
    )
}

export default Cart;