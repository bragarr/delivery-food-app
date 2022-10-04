import "./Login.css";

import { auth, provider } from "../../services/firebase";

export function Login() {

    const handleLogin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <article>
            <button onClick={handleLogin} className="button__login">Login com Google</button>
        </article>
    )
}