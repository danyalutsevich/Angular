import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IAction from "../interfaces/IAction";
import axios from "axios";
import ICityState from "../interfaces/ICityState";

const initialState: ICityState = {
  CityData: {
    name: "",
    about: "",
    theMostFamousLandmark: { name: "", photos: [] },
    landmarks: [],
    photos: []
  }
};

export const getCityData: any = createAsyncThunk(
  "eventsList/getCityData",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3000/cityData/");
    if (res.status === 200) {
      dispatch(setCityData(res.data));
    }
  }
);

export const userSlice = createSlice({
  name: "eventsList", // reducer name
  initialState, // state
  reducers: {
    setCityData: (state: ICityState, action: IAction) => {
      state.CityData = action.payload;
    },
  }, // funcs
});

export const { setCityData } = userSlice.actions;
export default userSlice.reducer;
