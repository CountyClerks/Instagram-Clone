import Header from '../components/header'
import { db } from '../services/firebase'
import { getDocs, collection} from "firebase/firestore";
import { useState, useEffect } from 'react'

export default function Feed() {

    const [docArray, setDocArray] = useState([])

    useEffect(() => {
        (async () => {
            const docSnap = await getDocs(collection(db, "images"))
            const docs = docSnap.docs.map((doc) => {
                const data = doc.data()
                return data
            })
            setDocArray(docs)
        })()
    }, [])

    const renderImages = docArray.map((image, index) => {
        return (
            <div className="post-card" id={index} key={index}>
                <div className="post-header">
                    <p className="post-user">{image.imageData.posterName}</p>
                    <img src="./img/post-menu.png" alt="Menu for post" className="post-menu"/>
                </div>
                <div className="post-image" style={{backgroundImage: `url(${image.imageData.imageURL})`}}>
                </div>
                <div className="post-interact">
                    <img src="./img/Like.svg" alt="Like" className="like-post"/>
                    <img src="./img/Comment.svg" alt="Comment" className="comment-post"/>
                    <img src="./img/Share Post.svg" alt="Share post" className="share-post"/>
                    <img src="./img/Save Post.svg" alt="Save post to favorites" className="save-post"/>
                </div>
                <div className="post-information">
                    <p className="post-likes">10 Likes</p>
                    <div className="post-caption">
                        <h2>{image.imageData.posterName}</h2>
                        <p>{image.imageData.caption}</p>
                    </div>
                    <div className="post-comments">
                        <p className="comment-user"></p>
                        <p className="comment"></p>
                    </div>
                    <div className="post-comments">
                        <p className="comment-user"></p>
                        <p className="comment"></p>
                    </div>
                    <div className="add-comment">
                        <input type="text" placeholder="Add a comment.." className="input-comment"/>
                         <button type="button" className="submit-comment">Post</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <main>
            <section className="header">
                <Header></Header>
            </section>
            <section className="feed">
                {renderImages}
            </section>
        </main>
    )
}