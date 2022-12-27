import axios from "axios";

const API_URL = '/agenda/'

// Create agenda 
const createAgenda = async(agendaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, agendaData, config)

    return response.data
}

// Get Agenda
const getAgenda = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config) 

    return response.data
}

// updateAgenda
const updateAgenda = async(agendaId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + agendaId, config)

    return response.data
}


// delete Agenda
const deleteAgenda = async(agendaId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + agendaId, config)

    return response.data
}

const agendaService = {
    createAgenda,
    getAgenda,
}

export default agendaService