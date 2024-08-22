import axios from "axios";

const baseURL = "http://localhost:8090";

const API = axios.create({
    baseURL,
    withCredentials: true
})

export default API;