import { Link } from "react-router-dom"
import InstagramLogo from "../img/instagram-name.svg"

export default function Home() {

    return (
        <main>
            <section className="login-card">
                <img src={InstagramLogo} alt="Instagram Logo" className="login-logo"/>
                <form className="login-form">
                    <input type="text" placeholder="Email" className="login-input"/>
                    <input type="password" placeholder="Password" className="login-input" required/>   
                </form>
                <Link to="/login/" className="log-in-link">Log In</Link>
            </section>
            <section className="signup-card">
                <p>Don't have an account?</p>
                <Link to="/signup/" className="sign-up-link">Sign Up</Link>
            </section>
        </main>
    )
}