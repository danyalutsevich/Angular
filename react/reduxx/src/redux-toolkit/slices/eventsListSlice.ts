import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IAction from "../interfaces/IAction";
import IEventsState from "../interfaces/IEventsState";
import axios from "axios";
import IEvent from "../interfaces/IEvent";

const initialState: IEventsState = {
  Events: [],
  Categories: [],
  CurrentCategory: "",
};

export const getEvents: any = createAsyncThunk(
  "eventsList/getEvents",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3000/events");
    if (res.status === 200) {
      dispatch(setEvents(res.data));
      dispatch(getCategories(res.data));
    }
  }
);

export const getCategories: any = createAsyncThunk(
  "eventsList/getCategories",
  async (events: IEvent[], { dispatch }) => {
    let categories = ["all"];
    events.map((el: IEvent) => {
      if (!(el.category in categories)) {
        categories.push(el.category);
      }
    });
    dispatch(setCategories(categories));
    dispatch(changeCategory("all"));
  }
);

export const userSlice = createSlice({
  name: "eventsList", // reducer name
  initialState, // state
  reducers: {
    setEvents: (state: IEventsState, action: IAction) => {
      state.Events = action.payload;
    },
    setCategories: (state: IEventsState, action: IAction) => {
      state.Categories = action.payload;
      console.log(action.payload);
    },
    changeCategory: (state: IEventsState, action: IAction) => {
      state.CurrentCategory = action.payload;
    },
  }, // funcs
});

export const { setEvents, setCategories, changeCategory } = userSlice.actions;
export default userSlice.reducer;
