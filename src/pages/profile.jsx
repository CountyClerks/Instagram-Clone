import Header from "../components/header"
import useFirebaseAuth, { useAuth } from "../services/auth"
import { auth, db } from "../services/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { useState } from "react"

export default function Profile() {
    const currentUser = useAuth(auth);
    console.log(currentUser.authUser)
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('')

    const docRef = doc(db, "users", currentUser.authUser.uid)
    const docSnap = getDoc(docRef).then(docSnap => {
        // console.log(docSnap.data().displayName)
        setDisplayName(docSnap.data().displayName)
    })

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
                    <h1>Current User: {displayName}</h1>
                    <button type="button" onClick={signingOut}>Sign Out</button>
                </div>
            </section>
        </main>
    )
}