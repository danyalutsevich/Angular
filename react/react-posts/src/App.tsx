import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import PostDetails from "./components/pages/PostDetails";
import About from "./components/pages/About";
import AuthRoute from "./components/routes/AuthRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about/*" element={<About />} />
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
