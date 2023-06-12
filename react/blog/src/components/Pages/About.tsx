import { Link, Route, Routes, useLocation } from "react-router-dom";

function About() {
  console.log(useLocation());
  return (
    <>
      <h2>About</h2>
      <Link to={"info"}>Info</Link>
      <Routes>
        <Route path="info" element={<p>Our info</p>}></Route>
      </Routes>
    </>
  );
}

export default About;
