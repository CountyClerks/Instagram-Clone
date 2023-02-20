import { Link } from "react-router-dom"
import InstagramLogo from "../img/instagram-name.svg"
import { auth } from "../services/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export default function Home() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <main>
            <section className="login-card">
                <img src={InstagramLogo} alt="Instagram Logo" className="login-logo"/>
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
            <section className="signup-card">
                <p>Don't have an account?</p>
                <Link to="/signup/" className="sign-up-link">Sign Up</Link>
            </section>
        </main>
    )
}