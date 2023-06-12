import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../models/IPost";
import { useNavigate } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [idPost, setIdPost] = useState(id);
  const [data, setData] = useState<IPost>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_PATH_TO_SERVER}/posts/${idPost}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (data) {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_PATH_TO_SERVER}/posts/${idPost}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => setSuccess(true))
      .then(() => navigate('/post'));
  };

  const handleDelete = (event: any) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_PATH_TO_SERVER}/posts/${idPost}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setSaved(true))
      .then(() => navigate('/post'));
  };

  return (
    <div className="flex col">
      {!isEditing && <button onClick={handleEditClick}>Edit</button>}
      <h2>Post # {idPost}</h2>
      <input disabled={!isEditing} name="title" onChange={handleChange} value={data?.title} />
      <input disabled={!isEditing} name="body" onChange={handleChange} value={data?.body} />
      {isEditing ? <button onClick={handleSubmit}>Save</button> : null}
      {success ? <p>Post updated</p> : null}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default PostDetails;
