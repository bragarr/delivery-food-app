import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import "./Profile.css"

export function Profile() {

    const [user] = useAuthState(auth);

    return (
        <img src={user?.photoURL}
            onClick={() => [auth.signOut()]}
            alt="Profile Picture"
            className="profile__picture"
        />
    )
}