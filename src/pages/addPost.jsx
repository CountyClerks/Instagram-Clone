import Header from "../components/header"
import { useState } from "react"
import { storage } from "../services/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default function NewPost () {

    const [file, setFile] = useState("")

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    function handleUpload() {
        if(!file) {
            alert("Please choose a file before proceeding.")
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

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
                <input type="file" accept="image/*" onChange={handleFile}/>
                <button className="add-post-button" onClick={handleUpload}>Upload Image</button>
            </section>
        </main>
        
    )
}