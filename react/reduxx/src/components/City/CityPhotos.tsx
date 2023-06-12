import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ICityState from "../../redux-toolkit/interfaces/ICityState";
import { useSelector } from "react-redux";

function CityPhotos() {
    const { CityData }: ICityState = useSelector((state: any) => state.city);
  return (
    <div>
      <h2>{CityData.name} Фото</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {CityData.photos.map((el: string, index: number) => {
          return <img
            style={{ height: "400px", margin: "20px" }}
            src={el}
            alt={CityData.name + " photo"}
            key={index}
          />;
        })}
      </div>
    </div>
  );
}

export default CityPhotos;
