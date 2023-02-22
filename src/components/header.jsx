import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/"><img src="./img/instagram-name.svg" alt="Instagram Logo" className="header-logo" /></Link>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/new-post"><button type="button" className="header-add-post" /></Link>
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