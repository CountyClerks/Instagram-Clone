import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import InstagramLogo from "../img/instagram-name.svg"
import { auth } from "../services/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        navigate("/feed")
    }

    return (
        <main>
            <section className="signup-card">
                <img src={InstagramLogo} alt="Instagram Logo" className="login-logo"/>
                <form className="signup-form" onSubmit={signUp}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="signup-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="signup-input"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
            </section>
            <section className="account-already">
                <p>Have an account?</p>
                <Link to="/" className="login-link">Log in</Link>
            </section>
        </main>
    )
}