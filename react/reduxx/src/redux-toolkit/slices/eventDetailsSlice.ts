import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IAction from "../interfaces/IAction";
import axios from "axios";
import IEventDetailsState from "../interfaces/IEventDetailsState";

const initialState: any = {
  event: {},
};

export const getEvent: any = createAsyncThunk(
  "eventsList/getEvent",
  async (id, { dispatch }) => {
    const res = await axios.get(`http://localhost:3000/events/${id}`);
    if (res.status === 200) {
      dispatch(setEvent(res.data));
    }
  }
);

export const userSlice = createSlice({
  name: "eventsList", // reducer name
  initialState, // state
  reducers: {
    setEvent: (state: IEventDetailsState, action: IAction) => {
      state.event = action.payload;
    },
  }, // funcs
});

export const { setEvent } = userSlice.actions;
export default userSlice.reducer;
