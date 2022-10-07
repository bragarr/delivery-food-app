import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import {
    Api
} from "../../services/Api.jsx";

const foodUrl = Api;

export function Home() {

    const [foodCategory, setFoodCategory] = useState([]);
    const getFoodCategory = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFoodCategory(data);
    }

    useEffect(() => {
        const foodCategoryUrl = `${foodUrl}Seafood`
        getFoodCategory(foodCategoryUrl);
    }, []);

    return (
        <main>
            <section className="main__presantation">
                <article className="main__important">
                    <h2 className="important__tittle">Uma das entregas mais rápidas da sua <span className="red__word">cidade!</span></h2>
                    <p className="important__text">
                        Aqui nos dedicamos em oferecer a melhor experiência
                        que você possa imaginar!
                        Sinta-se a vontade para navegar e escolher o seu
                        pedido e recebe-lo em um piscar de olhos!
                    </p>
                    <Link to={"menu"}
                        className="order__button"
                    >
                        Pedir agora!
                    </Link>
                </article>
                <article className="main__products">
                    <p>Apresentação de produtos</p>
                </article>
            </section>
        </main>
    )
}