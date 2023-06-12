import { useSelector } from "react-redux";
import ICityState from "../../redux-toolkit/interfaces/ICityState";

function CityLandmarks() {
//   const state = useLocation().state;
const { CityData }: ICityState = useSelector((state: any) => state.city);
  return (
    <div>
      <h2>{CityData.name} Landmarks</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
        CityData.landmarks.map((el: any, index: number) => {
          return (
            <div style={{ display: "flex", flexDirection: "column"}} key={index}>
              <img style={{height: "600px"}} src={el.photo} alt={el.name} />
              <p>{el.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CityLandmarks;
