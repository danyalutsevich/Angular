import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Post from "../Pages/Post";
import PostDetails from "../Pages/PostAbout";

function Navbar() {
  const items = [
    { title: "Home", path: "home" },
    { title: "Post", path: "post" },
    { title: "Add Post", path: "addPost" },
    { title: "Edit Post", path: "editPost" },
    { title: "About", path: "about" },
    { title: "Login", path: "auth" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRM-BLOG
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {items.map((item) => {
                return (
                  <li className="nav-item" key={item.path}>
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
