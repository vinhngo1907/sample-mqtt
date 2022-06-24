import axios from "axios"
export const getDataAPI = async(url) => {
    const res = await axios.get(url, {
        withCredentials: true
    })
    return res
}

export const deleteDataAPI = async(url) => {
    const res = await axios.delete(url, {
        withCredentials: true
    })
    return res
}