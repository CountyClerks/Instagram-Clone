import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <a href="/"><img src="./img/instagram-name.svg" alt="Instagram Logo" className="header-logo" /></a>
            <nav>
                <ul className="nav-list">
                    <li>
                        <button  type="button" className="header-add-post"></button>
                    </li>
                    <li>
                        <a href="/notifcations"><img src="./img/Notifications.svg" alt="Notifications Button" /></a>
                    </li>
                    <li>
                        <Link to="/profile" className="header-profile-button"><button className="header-profile"></button></Link>
                    </li>
                </ul>
            </nav>
            <div className="modal-container">
                <section className="add-post-modal">
                    <div className="modal-header">
                        <p>Create New Post</p>
                    </div>
                    <button className="add-post-button">Select Image</button>
                </section>
            </div>
        </header>
    )
}