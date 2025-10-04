import axios from "axios"
export const axiosInstance = axios.create({
    timeout : 50000 ,
    headers : {
        "Content-Type" : "application/json"
    },
    baseURL : "http://localhost:3000"
    
})

