import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../models/IPost";

function Post() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_PATH_TO_SERVER + "/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
      console.log(import.meta.env.VITE_PATH_TO_SERVER);
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link to={`${post.id}`} key={post.id}>
            <h1>{post.title}</h1>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Post;
