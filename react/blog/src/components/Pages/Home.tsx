import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about", { state: 555 });
  };
  return (
    <div>
      Home
      <button onClick={goToAbout}>Got to About</button>
    </div>
  );
}

export default Home;
