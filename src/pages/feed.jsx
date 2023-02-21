import Header from "../components/header"
import img from "../img/bird.png"
import postMenu from "../img/post-menu.png"
import Like from "../img/Like.svg"
import Comment from "../img/Comment.svg"
import SharePost from "../img/Share Post.svg"
import SavePost from "../img/Save Post.svg"
import useFirebaseAuth from "../services/auth"


//Placeholder information until styling is done
export default function Feed() {
    const user = useFirebaseAuth();
    console.log(user)
    return (
        <main>
            <section className="header">
                <Header></Header>
            </section>
            <section className="feed">
                <div className="post-card" id="0">
                    <div className="post-header">
                        <img src={img} alt=""  className="post-profile-picture"/>
                        <p className="post-user">user1</p>
                        <img src={postMenu} alt="" className="post-menu"/>
                    </div>
                    <div className="post-image">
                    </div>
                    <div className="post-interact">
                        <img src={Like} alt="" className="like-post"/>
                        <img src={Comment} alt="" className="comment-post"/>
                        <img src={SharePost} alt="" className="share-post"/>
                        <img src={SavePost} alt="" className="save-post"/>
                    </div>
                </div>
                <div className="post-card" id="1">
                    <p>user2</p>
                </div>
            </section>
        </main>
    )
}