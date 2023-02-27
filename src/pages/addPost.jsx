import Header from "../components/header"
import { useState, useEffect } from "react"
import { useAuth } from "../services/auth"
import { storage, auth, db } from "../services/firebase"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import format from "date-fns/format"
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"

export default function NewPost () {
    const user = useAuth(auth)
    const [file, setFile] = useState("")
    const [caption, setCaption] = useState("")
    const [fileURL, setFileURL] = useState('')
    const [displayName, setDisplayName] = useState('')
    const formatDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'")
    const docRef = doc(db, "users", user.authUser.uid)
    const docSnap = getDoc(docRef).then(docSnap => {
        setDisplayName(docSnap.data().displayName)
    })

    function writeToDoc() {
        const imageDoc = doc(db, `users/${user.authUser.uid}`, 'images', `${formatDate}`)
        const imageData = {
            caption: caption,
            originalPoster: user.authUser.uid,
            posterName: displayName,
            url: fileURL
        }
        setDoc(imageDoc, imageData)
    }

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    const handleUpload = async () => {
        if(!file) {
            alert("Please choose a file before proceeding.")
        }
        // const bucket = `${user.authUser.uid}/${formatDate}.jpg`
        const bucket = `images/${formatDate}.jpg`
        const storageRef = ref(storage, bucket)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', snapshot => {
            
        }, error => {
            console.log(error)
        }, () => {
            getDownloadURL(storageRef).then((url) => {
                console.log('URL: ', url)
                setFileURL(url)
            })
        }
        )
        writeToDoc()
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