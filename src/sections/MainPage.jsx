import React, { useState, useEffect } from 'react';
import pizzaList from '../data/listOfPizzas';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';

const MainPage = () => {

    const [count, setCount] = useState(0)
    let prod = JSON.parse(localStorage.getItem('count')) || 0;
    const [arrOfPizzas, setArrOfPizzas] = useState([...pizzaList])

    const findPizza = (e) => {
        const value = e.target.value.toLocaleLowerCase().replace(' ', '');
        [...pizzaList].filter(pizza => {
            return pizza.name.replace(' ', '').toLocaleLowerCase().includes(value) ||
                pizza.composition.find(compose => compose.toLocaleLowerCase().includes(value) ||
                    pizza.price.toString().includes(value));
        })
    }

    // sort by price

    const onSelect = (e) => {
        let value = e.target.value;
        const sortedPizzasArr = [...pizzaList].sort((a, b) => {
            let first = a.price;
            let second = b.price;
            switch (value) {
                case 'По возрастанию': {
                    if (first > second) return 1
                    if (first < second) return -1
                    if (first == second) return 0
                };
                case 'По убыванию': {
                    if (first > second) return -1
                    if (first < second) return 1
                    if (first == second) return 0
                };
                default: return arrOfPizzas;
            }
        })
        setArrOfPizzas(sortedPizzasArr);
    }

    return (
        <>
            <Header
                count={count}
                setCount={setCount}
                arrOfPizzas={arrOfPizzas}

            />
            <Main
                setArrOfPizzas={setArrOfPizzas}
                arrOfPizzas={arrOfPizzas}
                onSelect={onSelect}
                count={count}
                setCount={setCount}
            />
            <Footer />
        </>
    )
}
export default MainPage;