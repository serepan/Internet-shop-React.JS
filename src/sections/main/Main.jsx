import React from 'react';
import './../../scss/App.scss';
import pizzaList from './../../data/listOfPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';



const Main = () => {
    let arrOfPizzas = [...pizzaList]

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    {
                        arrOfPizzas.map((pizza, id) => {
                            return (
                                <div className="pizza__item-wrapper col-12 col-sm-6 col-md-4 col-lg-3" key={id + 1}>
                                    <div className="pizza__item">
                                        <h3>{pizza.name}</h3>
                                        <div className="pizza__item-img">
                                            <img src={pizza.img} alt="pizza image" />
                                        </div>
                                        <h5>{pizza.price}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Main;