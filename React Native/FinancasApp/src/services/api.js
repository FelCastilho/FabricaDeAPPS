import axios from "axios";

const api = axios.create({
    //Vindo do Insomnia (O react não aceita http, tem que ser https)
    //baseURL: 'http://localhost:3333/users' 

    //Trocando por Ipv4
    baseURL: 'http://26.32.186.216:3333' 
})

export default api;