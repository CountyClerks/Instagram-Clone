import Header from "../components/header"
import { useState } from "react"
import { useAuth } from "../services/auth"
import { storage, auth, db } from "../services/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import format from "date-fns/format"
import { doc, addDoc, setDoc, collection } from "firebase/firestore"

export default function NewPost () {
    const user = useAuth(auth)
    console.log(user.authUser)
    const [file, setFile] = useState("")
    const [caption, setCaption] = useState("")
    const formatDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'")

    function writeToDoc() {
        const imageDoc = doc(db, `users/${user.authUser.uid}`, 'images', `${formatDate}`)
        const imageData = {
            caption: caption,
            url: `images/${user.authUser.uid}/${formatDate}`
        }
        setDoc(imageDoc, imageData)
    }

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    function handleUpload() {
        if(!file) {
            alert("Please choose a file before proceeding.")
        }
        const bucket = `${user.authUser.uid}/${formatDate}.jpg`
        const storageRef = ref(storage, bucket)
        const uploadTask = uploadBytesResumable(storageRef, file);
        writeToDoc()
        uploadTask.on(
            "state_changed",
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
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
                    className=""
                    name="caption" 
                    id="caption" 
                    placeholder="Add Image Caption" 
                    onChange={(e) => setCaption(e.target.value)}/>
                <button className="add-post-button" onClick={handleUpload}>Upload Image</button>
            </section>
        </main>
    )
}