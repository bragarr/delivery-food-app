import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import "./Profile.css"

export function Profile() {

    const [user] = useAuthState(auth);

    const menuUsuario = () => {
        document.querySelector(".menu__user").classList.toggle("menu__topdown");
    }

    return (
        <img src={user?.photoURL}
            onClick={menuUsuario}
            alt="Profile Picture"
            className="profile__picture"
        />
    )
}