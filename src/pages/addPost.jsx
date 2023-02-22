import Header from "../components/header"
import { useState } from "react"

export default function NewPost () {

    const [file, setFile] = useState("")

    function handleFile(e) {
        setFile(e.target.files[0])
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
                <button className="add-post-button">Upload Image</button>
            </section>
        </main>
        
    )
}