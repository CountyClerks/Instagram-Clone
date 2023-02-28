import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth, db } from "../services/firebase"
import { useAuth } from "../services/auth"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc, addDoc, collection, setDoc } from "firebase/firestore"


export default function Signup() {
    const user = useAuth(auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setUsername] = useState('')
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const userDoc = doc(db, `users/${res.user.uid}`)
                function writeNewDoc() {
                    const docData = {
                        username: `${res.user.email}`,
                        displayName: name,
                        bio: '',
                    };
                    setDoc(userDoc, docData)
                }
                writeNewDoc()
            })
            .catch(err => console.log(err))
        navigate("/feed")
    }
    
    return (
        <main>
            <section className="signup-card">
                <img src="./img/instagram-name.svg" alt="Instagram Logo" className="login-logo"/>
                <form className="signup-form" onSubmit={register}>
                    <input 
                        type="text"
                        placeholder="Username"
                        className="signup-input"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)} 
                        required/>
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