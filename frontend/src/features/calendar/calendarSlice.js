import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import calendarService from './calendarService'

const initialState = {
    events: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new Calendar Event
export const createEvent = createAsyncThunk('calendar/create', async(calendarData, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await calendarService.createEvent(calendarData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.reponse.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get calendar events
export const getEvents = createAsyncThunk('calendar/getAll', async(_, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await calendarService.getEvents(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete Calendar Even
export const deleteEvent = createAsyncThunk('calendar/delete', async(id, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await calendarService.deleteEvent(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        // CREATE
        .addCase(createEvent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createEvent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(createEvent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // GET
        .addCase(getEvents.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(getEvents.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // DELETE
        .addCase(deleteEvent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteEvent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.events = state.events.filter((event) => event._id !== action.payload.id)
        })
        .addCase(deleteEvent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = calendarSlice.actions

export default calendarSlice.reducer