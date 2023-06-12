import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about", { state: 555 });
  };
  return (
    <div>
      Home
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;
