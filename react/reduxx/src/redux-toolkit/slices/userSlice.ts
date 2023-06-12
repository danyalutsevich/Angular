import { createSlice } from "@reduxjs/toolkit";
import IAction from "../interfaces/IAction";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users", // reducer name
  initialState, // state
  reducers: {
    addUser: (state, action: any) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    blockToggleUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload);
      state.users[index].isActive = !state.users[index].isActive;
    },
  }, // funcs
});

export const { addUser, deleteUser, blockToggleUser } = userSlice.actions;
export default userSlice.reducer;
