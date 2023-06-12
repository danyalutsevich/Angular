import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ICityState from '../../redux-toolkit/interfaces/ICityState';
import { useSelector } from 'react-redux';

function CityTheMostFamousLandmark() {
    const { CityData }: ICityState = useSelector((state: any) => state.city);
  return (
    <div>
        <h2>{CityData.name} Популярные достопримечательности</h2>
        <h2>{CityData.theMostFamousLandmark.name}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
        CityData.theMostFamousLandmark.photos.map((el: any, index: number) => {
          return (
              <img style={{height: "600px", margin: "20px"}} src={el} alt={CityData.theMostFamousLandmark.name}  key={index}/>
          );
        })}
      </div>
    </div>
  )
}

export default CityTheMostFamousLandmark