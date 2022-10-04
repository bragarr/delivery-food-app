import { Link } from "react-router-dom";
import { useEffect ,useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import { Login } from "../Login/login";
import { Loading } from "../Loading/Loading";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";

import logo from "../../assets/logo.png";
import { Profile } from "../Profile/Profile";

export function Header() {

    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user) {
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoURL: user.photoURL,
            });
        }
    }, [user]);

    const DefineUSer = () => {
        return !user ?
        <Login />
        :
        <Profile />
    }

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
                <DefineUSer />
            </nav>
            <TiThMenu className="icon__menu" onClick={ativaBarraLateral}/>
            <article className="menu__user">
                <DefineUSer />
                <ul>
                    <li>Topico 1</li>
                    <li>Topico 2</li>
                    <li>Topico 3</li>
                    <li>Topico 4</li>
                    <li>Topico 5</li>
                    <li>Topico 6</li>
                    <li>Topico 7</li>
                </ul>
            </article>
        </header>
    )
}