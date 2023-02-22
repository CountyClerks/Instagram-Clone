import { Link } from "react-router-dom"
import { auth } from "../services/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import useFirebaseAuth from "../services/auth";

export default function Home() {
    const user = useFirebaseAuth()
    console.log(user);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <main>
            <section className="container">
                <section className="login-card">
                    <img src="./img/instagram-name.svg" alt="Instagram Logo" className="login-logo"/>
                    <form className="login-form" onSubmit={signIn}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="login-input"
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login-input" 
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <Link to="/feed" className="log-in-button"><button type="submit"className="log-in-button">Log In</button></Link>
                    </form>
                </section>
                <section className="need-account">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="sign-up-link">Sign Up</Link>
                </section>
            </section>
        </main>
    )
}