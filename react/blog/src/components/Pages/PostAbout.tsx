import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IPost from "../../models/IPost";

function PostDetails() {
  const [post, setPost] = useState<IPost>({
    id: 0,
    title: "",
    body: "",
  });
  const { id } = useParams();
  const [sourcePost, setSourcePost] = useState<IPost>({
    id: 0,
    title: "",
    body: "",
  });
  useEffect(() => {
    fetch(import.meta.env.VITE_PATH_TO_SERVER + id)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setSourcePost(json);
      });
  }, [id]);

  const updatePost = () => {
    // console.log(sourcePost);
    if (post.title == "") {
      alert("Title cannot be empty");
      return;
    } else if (post.body == "") {
      alert("Body cannot be empty");
      return;
    } else if (post.title == sourcePost.title && post.body == sourcePost.body) {
      alert("No changes");
      return;
    }
    try {
      fetch(import.meta.env.VITE_PATH_TO_SERVER + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      alert("Successfully Updated")
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Id
        </span>
        <input
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          type="text"
          value={post.id}
          disabled
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Title
        </span>
        <input
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          type="text"
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
            console.log(post);
          }}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Body
        </span>
        <textarea
          className="form-control"
          value={post.body}
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
            console.log(post);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={updatePost}>
        Save
      </button>
    </div>
  );
}

export default PostDetails;
