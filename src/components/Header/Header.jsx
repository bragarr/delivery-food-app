import { Link } from "react-router-dom";
import { Login } from "../Login/login";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";

import logo from "../../assets/logo.png";

export function Header() {

    const ativaBarraLateral = () => {
        document.querySelector(".nav__menu").classList.toggle(("ativada"));
    }

    return (
        <header className="site__header">
            <figure className="logo__tittle--container">
                <img src={logo}
                    alt="app logo"
                    className="logo"
                />
                <h1 className="site__tittle">Delivery App</h1>
            </figure>
            <nav className="nav__menu">
                <Link to={"/"} className="link_nav">Home</Link>
                <Link to={"menu"} className="link_nav">Menu</Link>
                <Link to={"about"} className="link_nav">About Us</Link>
                <Link to={"service"} className="link_nav">Service</Link>
                <FaShoppingCart className="cart"/>
                <Login />
            </nav>
            <TiThMenu className="icon__menu" onClick={ativaBarraLateral}/>
        </header>
    )
}