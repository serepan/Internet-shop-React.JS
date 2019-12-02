import React, { useState, useRef } from 'react';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';
import InputElement from './../../elements/inputElement/InputElement';
import compositionList from './../../data/compositionList';
import { Link } from 'react-router-dom';

class createPizzaModel {
    constructor({ img, name, composition, price, caloricity }) {
        this.id = listOfCustomPizzas.length + 1;
        this.img = img;
        this.name = '';
        this.composition = composition;
        this.price = price;
        this.caloricity = caloricity;
        this.isNew = true;
        this.getName(name)
        this.getCompositionsName(composition)
    }

    getName(name) {
        name = name.toLowerCase().split('');
        name[0] = name[0].toUpperCase();
        this.name = name.join('');
    }
    getCompositionsName(compositions) {
        this.composition = compositionList.filter(el => {
            return compositions.includes(el.id);
        }).map(el => el.name)
    }
}

let listOfCustomPizzas = JSON.parse(localStorage.getItem('listOfCustomPizzas')) || [];

const pizzaModel = {
    id: 0,
    img: '',
    name: '',
    composition: [],
    price: 0,
    caloricity: 0,
}

const CreatePizza = () => {

    const addIngredient = (e) => {
        let composition = pizzaModel.composition;

        if (e.target.checked) {
            composition.push(e.target.value);
            pizzaModel.price += compositionList[e.target.id - 1].price;
            pizzaModel.caloricity += compositionList[e.target.id - 1].caloricity;
        }
        if (!e.target.checked) {
            composition.splice(e.target, 1);
            pizzaModel.price -= compositionList[e.target.id - 1].price;
            pizzaModel.caloricity -= compositionList[e.target.id - 1].caloricity;
        }
        console.log(pizzaModel.composition)
    }


    const setNameOfPizza = (e) => {
        pizzaModel.name = e.target.value
    }

    const createCustomPizza = () => {
        let newPizza = new createPizzaModel(pizzaModel);
        listOfCustomPizzas.push(newPizza);
        console.log(pizzaModel.composition)
        localStorage.setItem('listOfCustomPizzas', JSON.stringify(listOfCustomPizzas));
    }

    const clearCustomPizzas = () => {
        listOfCustomPizzas = [];
        localStorage.setItem('listOfCustomPizzas', JSON.stringify(listOfCustomPizzas));
    }


    return (
        <div className="create__pizza">
            <div className="container">
                <Link to='/' className="button">В магазин</Link>
                {
                    compositionList.map(pizza => {
                        return (
                            <InputElement key={pizza.id} type="checkbox" id={pizza.id} value={pizza.name} htmlFor={pizza.id} label={pizza.name} onInput={addIngredient} />
                        )
                    })
                }
                <InputElement type="text" placeholder="Введите свое название" onInput={setNameOfPizza} />
                <ButtonElement className="button" type="submit" title="Cоздать" onClick={createCustomPizza} />
                <ButtonElement className="button" title="Удалить все" onClick={clearCustomPizzas} />
            </div>
        </div>
    )
}

export default CreatePizza;