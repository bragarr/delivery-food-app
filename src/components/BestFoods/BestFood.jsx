import { useState, useEffect } from "react";

import { FaCartPlus } from "react-icons/fa";

import "./BestFoods.css"

import {
    API_SEARCH,
} from "../../services/Api";

const foodUrl = API_SEARCH;

const foodSpecialOfTheWeek = "chicken";

const ramdomPrice = (Math.random()*30).toFixed(2);
const ramdomFood = Math.round(Math.random()*15);

function changeBestFood() {
    document.querySelectorAll(".input__slide").forEach(selecao => {
        if(selecao.checked && selecao.value==="foodOne") {
            document.querySelector(".container__one").classList.add("container__ativado");
            document.querySelector(".container__two").classList.remove("container__ativado");
            document.querySelector(".container__three").classList.remove("container__ativado");
            document.querySelector(".container__four").classList.remove("container__ativado");
        }
        if(selecao.checked && selecao.value==="foodTwo") {
            document.querySelector(".container__one").classList.remove("container__ativado");
            document.querySelector(".container__two").classList.add("container__ativado");
            document.querySelector(".container__three").classList.remove("container__ativado");
            document.querySelector(".container__four").classList.remove("container__ativado");
        }
        if(selecao.checked && selecao.value==="foodThree") {
            document.querySelector(".container__one").classList.remove("container__ativado");
            document.querySelector(".container__two").classList.remove("container__ativado");
            document.querySelector(".container__three").classList.add("container__ativado");
            document.querySelector(".container__four").classList.remove("container__ativado");
        }
        if(selecao.checked && selecao.value==="foodFour") {
            document.querySelector(".container__one").classList.remove("container__ativado");
            document.querySelector(".container__two").classList.remove("container__ativado");
            document.querySelector(".container__three").classList.remove("container__ativado");
            document.querySelector(".container__four").classList.add("container__ativado");
        }
    })
}

function definesFirstSelectionBestFoods() {
    alert("ta funcionando");
}

export function BestFoods() {
    
    const [bestFoods, setBestFoods] = useState([]);

    const getBestFoods = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setBestFoods(data.meals);
    }

    useEffect(() => {
        const foodRamdomUrl = `${foodUrl}${foodSpecialOfTheWeek}`
        getBestFoods(foodRamdomUrl);
    },[]);

    return (
        <article className="presantation__best">
            <div className="containers__best">
                <figure className="container__best container__one container__ativado">
                    {bestFoods.length > 0 &&
                        <img 
                            src={bestFoods[ramdomFood].strMealThumb}
                            alt={bestFoods[ramdomFood].strMeal}
                            className="image__best"
                        />
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best">{bestFoods[ramdomFood].strMeal}</p>
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best category">{bestFoods[ramdomFood].strCategory}</p>
                    }
                    <p className="data__best">${ramdomPrice}</p>
                    <FaCartPlus className="cart__shopping"/>
                </figure>
                <figure className="container__best container__two">
                    {bestFoods.length > 0 &&
                        <img 
                            src={bestFoods[ramdomFood + 1].strMealThumb}
                            alt={bestFoods[ramdomFood + 1].strMeal}
                            className="image__best"
                        />
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best">{bestFoods[ramdomFood + 1].strMeal}</p>
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best category">{bestFoods[ramdomFood + 1].strCategory}</p>
                    }
                    <p className="data__best">${ramdomPrice}</p>
                    <FaCartPlus className="cart__shopping"/>
                </figure>       
                <figure className="container__best container__three">
                    {bestFoods.length > 0 &&
                        <img 
                            src={bestFoods[ramdomFood + 2].strMealThumb}
                            alt={bestFoods[ramdomFood + 2].strMeal}
                            className="image__best"
                        />
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best">{bestFoods[ramdomFood + 2].strMeal}</p>
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best category">{bestFoods[ramdomFood + 2].strCategory}</p>
                    }
                    <p className="data__best">${ramdomPrice}</p>
                    <FaCartPlus className="cart__shopping"/>
                </figure>
                <figure className="container__best container__four">
                    {bestFoods.length > 0 &&
                        <img 
                            src={bestFoods[ramdomFood + 3].strMealThumb}
                            alt={bestFoods[ramdomFood + 3].strMeal}
                            className="image__best"
                        />
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best">{bestFoods[ramdomFood + 3].strMeal}</p>
                    }
                    {bestFoods.length > 0 &&
                        <p className="data__best category">{bestFoods[ramdomFood + 3].strCategory}</p>
                    }
                    <p className="data__best">${ramdomPrice}</p>
                    <FaCartPlus className="cart__shopping"/>
                </figure>
            </div>
            <div className="slider">
                <label htmlFor="radioFoodOne">
                    <input 
                        type="radio"
                        name="food__option"
                        value="foodOne"
                        id="radioFoodOne"
                        className="input__slide"
                        onClick={changeBestFood}
                        defaultChecked
                    />
                </label>
                <label htmlFor="radioFoodTwo">
                    <input 
                        type="radio"
                        name="food__option"
                        value="foodTwo"
                        id="radioFoodTwo"
                        className="input__slide"
                        onClick={changeBestFood}
                    />
                </label>
                <label htmlFor="radioFoodThree">
                    <input 
                        type="radio"
                        name="food__option"
                        value="foodThree"
                        id="radioFoodThree"
                        className="input__slide"
                        onClick={changeBestFood}
                    />
                </label>
                <label htmlFor="radioFoodFour">
                    <input 
                        type="radio"
                        name="food__option"
                        value="foodFour"
                        id="radioFoodFour"
                        className="input__slide"
                        onClick={changeBestFood}
                    />
                </label>
            </div> 
        </article>
    );
}