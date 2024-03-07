import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types";
import { TStatus } from "../../types/status.type.ts";
import { usersService } from "./users.service.ts";
interface IUserInitialState {
    status: TStatus,
    data: IData,
    error: string,
}
const initialState: IUserInitialState = {
    status: 'success',
    data: {
        limit: 0,
        skip: 0,
        total: 0,
        users: []
    },
    error: ''
}
export const getUsersThunk = createAsyncThunk(
    'get-users',
    usersService.getUsers
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getUsersThunk.fulfilled, (state,action) => {
                state.data = action.payload
                state.status = 'success'
            })
            .addCase(getUsersThunk.rejected, (state) => {
                state.error = '132'
                state.status = 'error'
            })
    },
    selectors: {
        dataSelector: (sliceState) => sliceState,
    }
})

export const {
    dataSelector,
} = usersSlice.selectors
