import React, { useState } from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputElement from './../../elements/inputElement/InputElement';
import SelectElement from './../../elements/selectElement/SelectElement';
import Pizza from './../../components/Pizza';



const Main = ({ arrOfPizzas, onSelect, count, setCount, findPizza }) => {
    const [currentPizza, setCurrentPizza] = useState({ ...pizzaList[0] })

    return (
        <main className="main">
            <div className="container">
                <div className="search__option">
                    <InputElement
                        placeholder='Начните вводить название или цену...'
                        onInput={findPizza}
                    />

                    <SelectElement
                        onChange={onSelect}
                        value1='Не сортировать'
                        value2='По возрастанию'
                        value3='По убыванию'
                    />
                </div>

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