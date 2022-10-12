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
                    Clear    
                    <AiFillCloseSquare
                        className="close__symbol"
                    />
                </button>
            </article>
            <main className="cart__main">
                <article className="cart__items">
                    <span>Your cart is empity</span>
                </article>
                <article className="cart__values">
                    <p className="cart__value--information">Sub total</p>
                    <span></span>
                    <p className="cart__value--information">Delivery Fee</p>
                    <span></span>
                </article>
                <article className="cart__total">
                    <p className="cart__value--information">Total</p>
                    <span></span>
                </article>
                <button className="chckout__button">Check Out</button>
            </main>
        </section>
    );
}