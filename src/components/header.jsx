import InstagramLogo from "../img/instagram-name.svg"
import Notifications from "../img/Notifications.svg"
import NewPost from "../img/New-post.svg"

export default function Header() {
    return (
        <header>
            <a href="/"><img src={InstagramLogo} alt="Instagram Logo" className="header-logo" /></a>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="/" id="header-modal"><img src={NewPost} alt=""/></a>
                    </li>
                    <li>
                        <a href="/notifcations"><img src={Notifications} alt="Notifications Button" /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}