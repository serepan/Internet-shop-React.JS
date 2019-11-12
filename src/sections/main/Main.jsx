import React, { useState, useEffect } from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputElement from './../../elements/inputElement/InputElement';
import SelectElement from './../../elements/selectElement/SelectElement';
import Pizza from './../../components/Pizza';



const Main = ({arrOfPizzas, setArrOfPizzas, onSelect}) => {
    const [currentPizza, setCurrentPizza] = useState({ ...pizzaList[0] })
    // const [arrOfPizzas, setArrOfPizzas] = useState([...pizzaList])

    // useEffect(() => {
    //     console.log(arrOfPizzas)
    // }, [arrOfPizzas])

    const findPizza = (e) => {
        const value = e.target.value.toLocaleLowerCase().replace(' ', '');
        [...pizzaList].filter(pizza => {
            return pizza.name.replace(' ', '').toLocaleLowerCase().includes(value) ||
                pizza.composition.find(compose => compose.toLocaleLowerCase().includes(value) ||
                    pizza.price.toString().includes(value));
        })
    }

    // const onSelect = (value) => {
    //     const sortedPizzasArr = [...pizzaList].sort((a, b) => {
    //         let first = a.price;
    //         let second = b.price;
    //         switch (value) {
    //             case 'По возрастанию': {
    //                 if (first > second) return 1
    //                 if (first < second) return -1
    //                 if (first == second) return 0
    //             };
    //             case 'По убыванию': {
    //                 if (first > second) return -1
    //                 if (first < second) return 1
    //                 if (first == second) return 0
    //             };
    //             default: return arrOfPizzas;
    //         }
    //     })
    //     setArrOfPizzas(sortedPizzasArr);
    // }


    return (
        <main className="main">
            <div className="container">
                <InputElement
                    onInput={findPizza}
                />

                <SelectElement
                    onChange={onSelect}
                    value1='Ничего'
                    value2='По возрастанию'
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