import InstagramLogo from "../img/instagram-name.svg"
import Notifications from "../img/Notifications.svg"
import NewPost from "../img/New-post.svg"

export default function Header() {
    return (
        <header>
            <img src={InstagramLogo} alt="Instagram Logo" className="header-logo" />
            <div className="header-right">
                <img src={NewPost} alt=""/>
                <img src={Notifications} alt="Notifications Button" />
            </div>
        </header>
    )
}