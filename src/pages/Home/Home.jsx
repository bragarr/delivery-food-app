import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import fastBadge from "../../assets/fastD.png";

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
    }

    useEffect(() => {
        const foodCategoryUrl = `${foodUrl}`
        getFoodCategory(foodCategoryUrl);
    },[]);

    return (
        <main>
            <section className="main__presantation">
                <article className="main__important">
                    <h2 className="important__tittle">The Fast Delivery in Your <span className="red__word">city!</span></h2>
                    <p className="important__text">
                        Welcome to DeliveyApp!
                        We dedicate ourselves to give 
                        the best experience you can't even imagine it!
                        Feel free to go deep in our page and choose whatever
                        you want and receive in your place faster than you expect!
                        Choose whatever you want!
                        Receive in your place faster than you expect!
                    </p>
                    <Link to={"/"}
                        className="order__button"
                    >
                        Order Now!
                    </Link>
                    <figure className="container__badge">
                        <img 
                            src={fastBadge}
                            alt="badge for fast delivey certification"
                            className="fast__badge"
                        />
                    </figure>
                </article>
                <article className="main__products">
                    <h2 className="important__tittle second__trending">Trending</h2>
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