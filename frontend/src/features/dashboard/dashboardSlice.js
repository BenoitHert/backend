import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dashboardService from './dashboardService'

const initialState = {
    elements : [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

// Create new dashboard
export const createDashboard = createAsyncThunk('/create', async(dashboardData, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await dashboardService.createDashboard(dashboardData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get dashboard of a user
export const getDashboard = createAsyncThunk('/get', async(_, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await dashboardService.getDashboard(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete dashboard element for a user
export const deleteDashboard = createAsyncThunk('/delete', async(id, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await dashboardService.deleteDashboard(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// No need to update elements, you either want them or remove them

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducer: {
        reset : (state) => initialState
    },
    extraReducer : (builder) => {
        builder
        // CREATE
        .addCase(createDashboard.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createDashboard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(createDashboard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })       
         // GET
        .addCase(getDashboard.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getDashboard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(getDashboard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })         
        // DELETE
        .addCase(deleteDashboard.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteDashboard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.elements = state.elements.filter((element) => element._id !== action.payload.id)
        })
        .addCase(deleteDashboard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})



export const {reset} = dashboardSlice.actions
export default dashboardSlice.reducer