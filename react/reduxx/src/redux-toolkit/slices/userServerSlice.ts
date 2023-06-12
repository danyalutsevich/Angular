import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";
import axios from "axios";
import IState from "../interfaces/IState";

const initialState: IState = {
  users: [],
  status: false,
  error: "",
};

export const removeUser: any = createAsyncThunk(
  "users/removeUser",
  async (id, { dispatch }) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    if (res.status === 200) {
      dispatch(removeUserById(id));
    }
  }
);

export const addUser: any = createAsyncThunk(
    "users/addUser",
    async (user) => {
        const res = await axios.post("http://localhost:3000/users", user)
        return res.data;
    }
)

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (_) => {
    const res = await axios.get("http://localhost:3000/users");
    return res.data;
  }
  // async (_, {rejectWithValue, dispatch}) =>{
  //     const res = await axios.get("http://localhost:3000/users");
  //     dispatch(setUsers(res.data));
  // }
);

export const userServerSlice = createSlice({
  name: "users", // reducer name
  initialState, // state
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUserById: (state, action) => {
      state.users = state.users.filter(
        (user: IUser) => user.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        console.log(state.status);
      })
      .addCase(getUsers.fulfilled, (state, action: any) => {
        state.users = action.payload;
        state.status = true;
        console.log("fulfilled");
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = true;
        state.error = "Server error";
        console.log("rejected");
      })
      .addCase(addUser.pending, (state) => {
        console.log(state.status);
      })
      .addCase(addUser.fulfilled, (state, action: any) => {
        state.users.push(action.payload)
        state.status = true;
        console.log("fulfilled");
      })
      .addCase(addUser.rejected, (state) => {
        state.status = true;
        state.error = "Server error";
        console.log("rejected");
      });
  }, // funcs
});

export const { setUsers, removeUserById } = userServerSlice.actions;
export default userServerSlice.reducer;
