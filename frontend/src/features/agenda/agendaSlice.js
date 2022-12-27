import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agendaService from './agendaService'

const initialState = {
    events: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
}

// create agenda
const createAgenda = createAsyncThunk('agenda/create', async(agendaData, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await agendaService.createAgenda(agendaData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get agenda
const getAgenda = createAsyncThunk('agenda/getAll', async(_, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await agendaService.getAgenda(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// update agenda
const updateAgenda = createAsyncThunk('agenda/delete', async(id, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await agendaService.updateAgenda(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete agenda
const deleteAgenda = createAsyncThunk('agenda/delete', async(id, thunkAPI) => {
    try {
        // Get the users's token
        const token = thunkAPI.getState().auth.user.token
        return await agendaService.deleteAgenda(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const agendaSlice = createSlice({
    name: 'agenda',
    initialState,
    reducer: {
        reset : (state) => initialState
    },
    extraReducer : (builder) => {
        builder
        // CREATE
        .addCase(createAgenda.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createAgenda.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(createAgenda.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })        
        // GET
        .addCase(getAgenda.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAgenda.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(getAgenda.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })        
        // UPDATE
        .addCase(createAgenda.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateAgenda.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(updateAgenda.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })        
        // DELETE
        .addCase(deleteAgenda.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteAgenda.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.events = state.events.filter((event) => event._id !== action.payload.id)
        })
        .addCase(deleteAgenda.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = agendaSlice.actions

export default agendaSlice.reducer