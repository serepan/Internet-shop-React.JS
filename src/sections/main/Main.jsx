import React, { useState } from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './../../components/Pizza';



const Main = () => {
    let arrOfPizzas = [...pizzaList]
    const [currentPizza, setCurrentPizza] = useState({ ...arrOfPizzas[0] })

    return (
        <main className="main">
            <div className="container">
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