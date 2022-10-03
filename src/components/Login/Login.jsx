import "./Login.css";

import { auth, provider } from "../../services/firebase";

export function Login() {
    return (
        <article>
            <button className="button__login">Login com Google</button>
        </article>
    )
}