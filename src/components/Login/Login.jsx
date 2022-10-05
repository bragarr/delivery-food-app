import "./Login.css";

import { auth, provider } from "../../services/firebase";

import { FcGoogle } from "react-icons/fc";

export function Login() {

    const handleLogin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <button onClick={handleLogin}
            className="button__login"
        >
            Login<FcGoogle />
        </button>
    )
}