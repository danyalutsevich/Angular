import { Table } from "react-bootstrap";
import { BsTrash, BsPencil } from "react-icons/bs";
import IPost from "../models/IPost";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MyTable = (props: any) => {
  const [tableData, setTableData] = useState(props.data);
  const [state, setState] = useState(false);
  useEffect(() => {
    setTableData(props.data);
    console.log(props);
  }, [props, props.data.length]);
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th style={{ width: "100px" }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((post: IPost) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>
              <Link to={`${post.id}`}>{post.title}</Link>
            </td>
            <td style={{ textAlign: "center" }}>
              <span onClick={() => deletePost(post.id, props.update)}>
                <BsTrash className="text-danger mr-3" />
              </span>
              <BsPencil className="text-primary" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const deletePost = (id: number, getData: any) => {
  if (confirm("Are you sure?")) {
    fetch(import.meta.env.VITE_PATH_TO_SERVER + id, {
      method: "DELETE",
    }).then(() => {
      console.log(`Post #${id} deleted`);
      getData();
    });
  }
};

export default MyTable;
