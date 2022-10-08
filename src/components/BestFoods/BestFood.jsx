import { useState, useEffect } from "react";

import "./BestFoods.css"

import {
    API_RAMDOM,
} from "../../services/Api";

const foodUrl = API_RAMDOM;

const ramdomPrice = (Math.random()*30).toFixed(2);
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
        const foodRamdomUrl = `${foodUrl}`
        getBestFoods(foodRamdomUrl);
    },[]);

    
    return (
            <figure className="container__best">
                {bestFoods.length > 0 &&
                    <img 
                        src={bestFoods[0].strMealThumb}
                        alt={bestFoods[0].strMeal}
                        className="image__best"
                    />
                }
                {bestFoods.length > 0 &&
                    <p className="data__best">{bestFoods[0].strMeal}</p>
                }
                {bestFoods.length > 0 &&
                    <p className="data__best category">{bestFoods[0].strCategory}</p>
                }
                <p className="data__best">${ramdomPrice}</p>
            </figure>
    );
}