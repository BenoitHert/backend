import axios from 'axios'

const API_URL = '/shoplist'

// create new shoplist
const createShoplist = async(ShoplistData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, ShoplistData, config)

    return response.data
}

// get the items in the shoplist
const getShoplist = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//  delete an item from the shoplist of a user
const deleteShoplist =  async(shoplistId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + shoplistId, config)

    return response.data
}

const shopService = {
    createShoplist,
    getShoplist,
    deleteShoplist
}

export default shopService