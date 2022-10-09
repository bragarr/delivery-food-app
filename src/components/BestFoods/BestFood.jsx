import { useState, useEffect } from "react";

import "./BestFoods.css"

import {
    API_SEARCH,
} from "../../services/Api";

const foodUrl = API_SEARCH;

const foodSpecialOfTheWeek = "chicken";

const ramdomPrice = (Math.random()*30).toFixed(2);
const ramdomFood = Math.round(Math.random()*15);


console.log(ramdomPrice);

export function BestFoods() {
    
    const [bestFoods, setBestFoods] = useState([]);

    const getBestFoods = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setBestFoods(data.meals);
        console.log(data.meals);
    }

    useEffect(() => {
        const foodRamdomUrl = `${foodUrl}${foodSpecialOfTheWeek}`
        getBestFoods(foodRamdomUrl);
    },[]);

    
    return (
        <div className="containers__best">
            <figure className="container__best">
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
            </figure>
            <figure className="container__best">
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
            </figure>       
            <figure className="container__best">
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
            </figure>
            <figure className="container__best">
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
            </figure>
        </div>
    );
}