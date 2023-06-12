import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import Navbar from "./components/partials/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Post from "./components/Pages/Post";
import PostDetails from "./components/Pages/PostAbout";
import About from "./components/Pages/About";
import AuthRoute from "./components/routes/AuthRoute";
import Layout from "./components/Layout";
import Auth from "./components/Pages/Auth";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="auth" element={<Auth />} />
          <Route element={<AuthRoute />}>
            <Route path="post" element={<Post />} />
            <Route path="post/:id" element={<PostDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
