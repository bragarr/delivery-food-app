import { AiOutlineArrowLeft, AiFillCloseSquare } from "react-icons/ai";

import "../Header/Header.css"
import "./ShopCart.css"

const ativaCart = () => {
    document.querySelector(".cart__container").classList.toggle(("cart__ativado"));
}

export function ShopCart() {
    return (
        <section className="cart__container">
            <article className="cart__header">
                <AiOutlineArrowLeft className="hide__button" onClick={ativaCart} />
                <h3 className="cart__tittle">Cart</h3>
                <button 
                    className="clear__button"
                >
                <AiFillCloseSquare
                    className="close__symbol"
                />
                </button>
            </article>
            <p>Um tipo de seção</p>
            <p>dois tipo de seção</p>
            <p>três tipo de seção</p>
            <p>Quatro tipo de seção</p>
        </section>
    );
}