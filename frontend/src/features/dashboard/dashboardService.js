import axios from 'axios'
import { response } from 'express'

const API_URL = '/'

// create new dashboard
const createDashboard = async(dashboardData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.post(API_URL, dashboardData, config)

    return response.data
}


// get dashboard of a user
const getDashboard = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// delete a dashboard element for a user
const deleteDashboard = async(dashboardId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const reponse = await axios.delete(API_URL + dashboardId, config)

    return response.data
}




const dashboardService = {
    createDashboard,
    getDashboard,
    deleteDashboard
}
export default dashboardService
