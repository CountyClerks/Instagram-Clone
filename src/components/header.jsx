import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <a href="/"><img src="./img/instagram-name.svg" alt="Instagram Logo" className="header-logo" /></a>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="/" id="header-modal"><img src="./img/New-post.svg" alt=""/></a>
                    </li>
                    <li>
                        <a href="/notifcations"><img src="./img/Notifications.svg" alt="Notifications Button" /></a>
                    </li>
                    <li>
                        <Link to="/profile" className="header-profile-button"><button className="header-profile"></button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}