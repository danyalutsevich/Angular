import { NavLink } from "react-router-dom";
interface IMenu {
  title: string;
  path: string;
}
function Navbar() {
  const items: IMenu[] = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Posts", path: "post" },
    { title: "Add Post", path: "add-post" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
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
              {items.map((el, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={el.path}
                  >
                    {el.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
