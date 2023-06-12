import { useState } from "react";
import { IPost } from "../../models/IPost";

export function AddPost() {

    const [createdPost, setCreatedPost] = useState<IPost>({ body: "", title: "", id: 0 });
    const [success, setSuccess] = useState<boolean>(false);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setCreatedPost({ ...createdPost, [name]: value });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_PATH_TO_SERVER}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createdPost)
        })
            .then(() => setSuccess(true));
    }

    return (
        <div className="flex col">
            <input type="text" name="title" onChange={handleChange} />
            <textarea name="body" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            {success ? <p>Post created</p> : null}
        </div>
    )

}