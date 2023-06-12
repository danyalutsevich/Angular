import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import userServerSlice from "../slices/userServerSlice";
import eventsListSlice from "../slices/eventsListSlice";
import eventDetailsSlice from "../slices/eventDetailsSlice";
import citySlice from "../slices/citySlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    userServer: userServerSlice,
    eventsList: eventsListSlice,
    eventDetails: eventDetailsSlice,
    city: citySlice,
  },
});

export default store;
