import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ICityState from "../../redux-toolkit/interfaces/ICityState";

function CityInfo() {
  const { CityData }: ICityState = useSelector((state: any) => state.city);
  return (
    <>
      <h2>{CityData.name}</h2>
      <p>{CityData.about}</p>
    </>
  );
}

export default CityInfo;
