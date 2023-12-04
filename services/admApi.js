import axios from 'axios';

const api = axios.create({
    baseURL: "https://adm.educacoes.com.br/api/v1",
});

export default api;