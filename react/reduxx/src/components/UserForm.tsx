import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux-toolkit/slices/userServerSlice";
import { v4 } from "uuid";

function UserForm() {
  const dispatch = useDispatch();

  const inputRef: any = useRef();

  const handlerAddUser = () => {
    const user = {
      id: v4(),
      name: inputRef.current.value,
      isActive: true,
    };
    dispatch(addUser(user));
  };

  return (
    <div>
      <h1>UserForm</h1>
      <label>
        Имя: <input type="text" ref={inputRef} />
        <button onClick={handlerAddUser}>Сохранить</button>
      </label>
    </div>
  );
}

export default UserForm;
