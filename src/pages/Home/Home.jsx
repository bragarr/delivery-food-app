import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import {
    API_CATEGORY,

} from "../../services/Api.jsx";
import { BestFoods } from "../../components/BestFoods/BestFood";

const foodUrl = API_CATEGORY;

export function Home() {

    const [foodCategory, setFoodCategory] = useState([]);
    const getFoodCategory = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFoodCategory(data.categories);
        console.log(data.categories);
    }

    useEffect(() => {
        const foodCategoryUrl = `${foodUrl}`
        getFoodCategory(foodCategoryUrl);
    },[]);

    return (
        <main>
            <section className="main__presantation">
                <article className="main__important">
                    <h2 className="important__tittle">The fast Delivery in your <span className="red__word">city!</span></h2>
                    <p className="important__text">
                        Welcome to DeliveyApp!
                    </p>
                    <p className="important__text">
                        We dedicate ourselves to give 
                        the best experience you can't even imagine it!
                    </p>                    
                    <p className="important__text">
                        Feel free to go deep in our page and choose whatever
                        you want and receive in your place faster than you expect!
                    </p>
                    <p className="important__text">
                        Choose whatever you want!
                    </p>
                    <p className="important__text">
                       Receive in your place faster than you expect!
                    </p>
                    <Link to={"menu"}
                        className="order__button"
                    >
                        Order Now!
                    </Link>
                </article>
                <article className="main__products">
                    <h2 className="important__tittle second__trending">The Best of The Moment</h2>
                    <BestFoods />
                </article>
            </section>
            <section className="category__presantation">
                <h2>Categories</h2>
                <ul className="category__list">
                    {foodCategory.length > 0 && foodCategory.map((category) =>
                        <li className="item__list" key={category.idCategory}>
                            {category.strCategory}
                        </li>
                    )}
                </ul>
            </section>
        </main>
    )
}