import Header from "../components/header"
import { useState} from "react"
import { useAuth } from "../services/auth"
import { storage, auth, db } from "../services/firebase"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import format from "date-fns/format"
import { doc, getDoc, setDoc } from "firebase/firestore"

export default function NewPost () {
    const user = useAuth(auth)
    const [file, setFile] = useState("")
    const [caption, setCaption] = useState("")
    const [displayName, setDisplayName] = useState("")
    const formatDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'")
    const docRef = doc(db, "users", user.authUser.uid)
    const docSnap = getDoc(docRef).then(docSnap => {
        setDisplayName(docSnap.data().displayName)
    })

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    const handleUpload = async () => {
        if(!file) {
            alert("Please choose a file before proceeding.")
        }
        const bucket = `images/${formatDate}.jpg`
        const storageRef = ref(storage, bucket)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', snapshot => {}, error => {
            console.log(error)
        }, () => {
            getDownloadURL(storageRef).then((url) => {
                const imageDoc = doc(db, `images/${formatDate}`)
                const imageData = {
                    imageData: {
                        caption: caption,
                        originalPoster: user.authUser.uid,
                        posterName: displayName,
                        imageURL: url
                    }
                }
                setDoc(imageDoc, imageData)
            })
        })
    }

    return (
        <main>
            <section className="header">
                <Header></Header>
            </section>
            <section className="add-post-modal">
                <div className="modal-header">
                    <p>Create New Post</p>
                </div>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFile}/>
                <input 
                    type="text" 
                    className="add-caption"
                    name="caption" 
                    id="caption" 
                    placeholder="Add Image Caption" 
                    onChange={(e) => setCaption(e.target.value)}/>
                <button className="add-post-button" onClick={handleUpload}>Upload Image</button>
            </section>
        </main>
    )
}