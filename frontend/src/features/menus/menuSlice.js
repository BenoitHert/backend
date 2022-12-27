import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuService from './menuService'

const initialState = {
    meals:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message : '',
}

// create new 

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducer : {
        reset : (state) => initialState
    },
    extraReducer: (buidler) => {
        buidler
        .addCase()
    }
})

export const {reset} = menuSlice.actions

export default menuSlice.reducer