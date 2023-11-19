import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const createSession = async (data) => {
    return api.post("/auth/login", data)
}

export const createUserAccount = async(data) => {
    return api.post("/auth/register", data)
}

export const getAllusers = async() => {
    return api.get("/admin/users")
}