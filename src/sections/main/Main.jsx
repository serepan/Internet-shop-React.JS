import React, { useState, useEffect } from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputElement from './../../elements/inputElement/InputElement';
import SelectElement from './../../elements/selectElement/SelectElement';
import Pizza from './../../components/Pizza';



const Main = ({ arrOfPizzas, setArrOfPizzas, onSelect, count, setCount }) => {
    const [currentPizza, setCurrentPizza] = useState({ ...pizzaList[0] })

    const findPizza = (e) => {
        const value = e.target.value.toLocaleLowerCase().replace(' ', '');
        [...pizzaList].filter(pizza => {
            return pizza.name.replace(' ', '').toLocaleLowerCase().includes(value) ||
                pizza.composition.find(compose => compose.toLocaleLowerCase().includes(value) ||
                    pizza.price.toString().includes(value));
        })
    }

    return (
        <main className="main">
            <div className="container">
                <InputElement
                onInput={findPizza}
                />

                <SelectElement
                    onChange={onSelect}
                    value1='Не сортировать'
                    value2='Цена по возрастанию'
                    value3='По убыванию'
                />
                <div className="row">
                    {
                        arrOfPizzas.map((pizza, id) => {
                            return (
                                <Pizza
                                    key={id + 1}
                                    pizza={pizza}
                                    setCurrentPizza={setCurrentPizza}
                                    count={count}
                                    setCount={setCount}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Main;