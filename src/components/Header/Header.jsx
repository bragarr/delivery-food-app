import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "./Header.css";

import logo from "../../assets/logo.png";

export function Header() {
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
                <Link to={"/"}>Home</Link>
                <Link to={"menu"}>Menu</Link>
                <Link to={"about"}>About Us</Link>
                <Link to={"service"}>Service</Link>
                <FaShoppingCart />
            </nav>
        </header>
    )
}