import axios from 'axios'

const API_URL = '/calendar'

// create new Event
const createEvent = async(calendarData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, calendarData, config)

    return response.data
}



// Get all events
const getEvents = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete an Event
const deleteEvent = async(calendarId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + calendarId, config)

    return response.data
}










const calendarService = {
    createEvent,
    getEvents,
    deleteEvent,
}
export default calendarService