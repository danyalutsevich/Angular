import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux-toolkit/slices/userServerSlice";

function User(props: any) {
  const dispatch = useDispatch();

  const user = props.user;
  const deleteButtonHandler = (id: any) => {
    dispatch(removeUser(id));
  };

  const blockButtonHandler = (id: any) => {};
  return (
    <div>
      <span style={{ color: user.isActive ? "green" : "red" }}>
        Name - {user.name}
      </span>
      <button onClick={() => deleteButtonHandler(user.id)}>Delete</button>
      <button onClick={() => blockButtonHandler(user.id)}>
        {user.isActive ? "Block" : "Unlock"}
      </button>
    </div>
  );
}

export default User;
