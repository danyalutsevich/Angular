import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import { getUsers } from "./redux-toolkit/slices/userServerSlice";
import EventsList from "./components/EventsList";
import { Outlet, Route, Routes } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import City from "./components/City/City";

function App() {
  return (
    <div>
      <City />
    </div>
  );
}
export default App;
