import axios from 'axios';

const api = axios.create({
    baseURL: "https://painel.sistemaseduc.com.br/api/",
});

export default api;