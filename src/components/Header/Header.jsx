import { Link } from "react-router-dom";
import { useEffect ,useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Login } from "../Login/login";
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
                displayName: user.displayName,
            });
        }
    }, [user]);

    const DefineUSer = () => {
        return !user
        ?
        <Login />
        :
        <Profile />
    }

    const ativaBarraLateral = () => {
        document.querySelector(".nav__menu").classList.toggle(("ativada"));
    }

    const UserData = () => {
        return !user
        ?
        <Login />
        :
        <figure>
            <DefineUSer />
            <h3>{user?.displayName}</h3>
            <p>Seja bem vindo!</p>
            <button onClick={() => [auth.signOut(), document.querySelector(".menu__user").classList.toggle("menu__topdown")]}
                className="logout__button"
            >
                Sair
            </button>
        </figure>
    }

    return (
        <header className="site__header">
            <figure className="logo__tittle--container">
                <Link to={"/"}>
                    <img src={logo}
                    alt="app logo"
                    className="logo"
                    />
                </Link>
                <h1 className="site__tittle">Delivery App</h1>
            </figure>
            <nav className="nav__menu">
                <Link to={"/"} className="link_nav">Home</Link>
                <Link to={"menu"} className="link_nav">Menu</Link>
                <Link to={"about"} className="link_nav">Sobre</Link>
                <Link to={"service"} className="link_nav">Serviço</Link>
                <FaShoppingCart className="cart"/>
                <DefineUSer />
            </nav>
            <TiThMenu className="icon__menu" onClick={ativaBarraLateral}/>
            <article className="menu__user">
                <UserData />
            </article>
        </header>
    )
}