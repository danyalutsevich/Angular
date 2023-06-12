import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IPost from "../../models/IPost";

function PostDetails() {
  const { id } = useParams();
  const [idPost, setIdPost] = useState(id);
  const [data, setData] = useState<IPost>();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_PATH_TO_SERVER}${idPost}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div>
      <h2>Post # {idPost}</h2>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
}
export default PostDetails;
