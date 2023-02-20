import React, { useState } from "react"
import { Link } from "react-router-dom"
import InstagramLogo from "../img/instagram-name.svg"
import { auth } from "../services/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <main>
            <section className="signup-form">
                <img src={InstagramLogo} alt="Instagram Logo" className="login-logo"/>
                <form className="signup-form" onSubmit={signUp}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <button type="submit">Sign Up</button>
                </form>
            </section>
            <section className="account-already">
                <p>Have an account?</p>
                <Link to="/">Log in</Link>
            </section>
        </main>
    )
}