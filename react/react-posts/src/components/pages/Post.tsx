import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IPost from "../../models/IPost";

function Post() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_PATH_TO_SERVER)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link to={`${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Post;
