import React, { useState, useRef } from 'react';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';
import InputElement from './../../elements/inputElement/InputElement';
import listOfPizzas from './../../data/listOfPizzas';
import compositionList from './../../data/compositionList';
import { Link } from 'react-router-dom';

class createPizzaModel {
    constructor({ img, name, composition, price, caloricity }) {
        this.id = listOfPizzas.length + 1;
        this.img = img
        this.name = '';
        this.composition = [];
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

const pizzaModel = {
    img: '',
    name: '',
    composition: [],
    price: 0,
    caloricity: 0,
}

const CreatePizza = () => {

    const addIngredient = (e) => {
        let composition = pizzaModel.composition;

        // pizzaModel.price = pizzaModel.composition.length ? 100 : 0;
        // pizzaModel.caloricity = pizzaModel.composition.length ? 1000 : 0;


        if (e.target.checked) {
            composition.push(e.target.id);
            pizzaModel.price = e.target.price + 100;
            pizzaModel.caloricity = e.target.caloricity + 1000;
        } else {
            pizzaModel.composition = composition.filter(composId => composId !== e.target.id);
        }




        // pizzaModel.price += +e.target.price;
        // pizzaModel.composition.forEach(composId => {
        //     pizzaModel.price += compositionList.find(el => el.id === composId).price;
        // })
        // pizzaModel.composition.forEach(composId => {
        //     pizzaModel.caloricity += compositionList.find(el => el.id === composId).caloricity;
        // })

        console.log(pizzaModel)
    }



    const consLog = (e) => {
        !e.target.checked ? console.log('unchecked') : console.log('checked')
    }

    return (
        <div className="create__pizza">
            <div className="container">
                <Link to='/' className="button">В магазин</Link>
                {
                    compositionList.map(pizza => {
                        return (
                            <InputElement key={pizza.id} type="checkbox" id={pizza.id} htmlFor={pizza.id} label={pizza.name} onInput={addIngredient} />
                        )
                    })
                }
                <ButtonElement className="button" title="Cоздать" />
            </div>
        </div>
    )
}

export default CreatePizza;