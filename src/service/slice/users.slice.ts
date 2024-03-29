import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types";
import { TStatus } from "../../types/status.type.ts";
import { usersService } from "./users.service.ts";
interface IUserInitialState {
  status: TStatus;
  data: IData;
  error: string;
}
const initialState: IUserInitialState = {
  status: "success",
  data: {
    limit: 100,
    skip: 0,
    total: 3,
    users: [
      {
        id: 1,
        firstName: "Terry",
        lastName: "Mercyhurst",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
          city: "Washington",
        },
      },
      {
        id: 2,
        firstName: "Max",
        lastName: "Dillon",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
          city: "Washington",
        },
      },
      {
        id: 3,
        firstName: "Nick",
        lastName: "White",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
          city: "Washington",
        },
      },
    ],
  },
  error: "",
};
export const getUsersThunk = createAsyncThunk(
  "get-users",
  usersService.getUsers
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        state.error = "";
      })
      .addCase(getUsersThunk.rejected, (state) => {
        state.error = "Ошибка при загрузке пользователей";
        state.status = "error";
      });
  },
  selectors: {
    dataSelector: (sliceState) => sliceState,
  },
});

export const { dataSelector } = usersSlice.selectors;
