import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const createSession = async (username, password) => {
    const data = {
        username:  username,
        password: password
    }
    return api.post("/auth/login", data)
}