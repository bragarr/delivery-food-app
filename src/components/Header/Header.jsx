import "./Header.css";

import logo from "../../assets/logo.png";

export function Header() {
    return (
        <header>
            <img src={logo} alt="logo do aplicativo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}