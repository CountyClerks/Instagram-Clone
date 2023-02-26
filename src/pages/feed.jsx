import Header from "../components/header"
import useFirebaseAuth from "../services/auth";
import { auth, storage } from "../services/firebase"
import { useAuth } from "../services/auth"
import { ref, getDownloadURL } from "firebase/storage"

//Placeholder information until styling is done
export default function Feed() {
    const user = useAuth()

    const storagePath = ref(storage, 'images/')
    
    return (
        <main>
            <section className="header">
                <Header></Header>
            </section>
            <section className="feed">
                <div className="post-card" id="0">
                    <div className="post-header">
                        <img src="./img/bird.png" alt=""  className="post-profile-picture"/>
                        <p className="post-user">user1</p>
                        <img src="./img/post-menu.png" alt="" className="post-menu"/>
                    </div>
                    <div className="post-image">
                    </div>
                    <div className="post-interact">
                        <img src="./img/Like.svg" alt="" className="like-post"/>
                        <img src="./img/Comment.svg" alt="" className="comment-post"/>
                        <img src="./img/Share Post.svg" alt="" className="share-post"/>
                        <img src="./img/Save Post.svg" alt="" className="save-post"/>
                    </div>
                    <div className="post-information">
                        <p className="post-likes">10 Likes</p>
                        <div className="post-comments">
                            <p className="comment-user">User2</p>
                            <p className="comment">This is a great post!</p>
                        </div>
                        <div className="post-comments">
                            <p className="comment-user">User3</p>
                            <p className="comment">This is a great post!</p>
                        </div>
                        <div className="add-comment">
                            <input type="text" placeholder="Add a comment.." className="input-comment"/>
                            <button type="button" className="submit-comment">Post</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}