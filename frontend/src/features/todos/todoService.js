import axios from "axios";

const API_URL = '/todos/'

// create new todo
const createTodo = async(todoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, todoData, config)
    
    return response.data
}

// Get all the todos of a user
const getTodos = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    
    return response.data
}

// update a todo item
const updateTodo = async(todoId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + todoId, config)

    return response.data
}

// delete todoItem from a user
const deleteTodo = async(todoId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + todoId, config)
    
    return response.data
}


const todoService = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo
}

export default todoService



