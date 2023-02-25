import Header from "../components/header"
import useFirebaseAuth, { useAuth } from "../services/auth"
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Profile() {
    const currentUser = useAuth(auth);
    console.log(currentUser.authUser)
    const navigate = useNavigate();

    const signingOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error)
        })
        navigate("/")
    }

    return (
        <main>
            <section className="header">
                <Header />
            </section>
            <section className="profile-container">
                <div className="profile-buttons">
                    <button>Edit Profile</button>
                    <button type="button" onClick={signingOut}>Sign Out</button>
                </div>
            </section>
        </main>
    )
}