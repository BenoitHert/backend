import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopService from './shopService'

const initialState = {
    item:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message : '',
}

// create new shoplist,
export const createShoplist = createAsyncThunk('shoplist/create', async(shoplistData, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await shopService.createShoplist(shoplistData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get all the items in the shoplist
export const getShoplist = createAsyncThunk('shoplist/getAll', async(_, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await shopService.getShoplist(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete item in shoplist
export const deleteShoplist = createAsyncThunk('shoplist/delete', async(id, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await shopService.deleteShoplist(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const shopSlice = createSlice({
    name: 'shoplist',
    initialState,
    reducer : {
        reset : (state) => initialState
    },
    extraReducer: (buidler) => {
        buidler
        // CREATE
        .addCase(createShoplist.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createShoplist.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(createShoplist.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })        
        // GET
        .addCase(getShoplist.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getShoplist.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(getShoplist.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // DELETE
        .addCase(deleteShoplist.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteShoplist.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.items = state.items.filter((item) => item._id !== action.payload.id)
        })
        .addCase(deleteShoplist.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = shopSlice.actions

export default shopSlice.reducer