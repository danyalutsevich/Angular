import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyTable from "../MyTable";

function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
   getData();
  }, []);

  const getData = () =>{
    fetch(import.meta.env.VITE_PATH_TO_SERVER)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  }

  return <div>{<MyTable data={data} update={getData}/>}</div>;
}

export default Post;
