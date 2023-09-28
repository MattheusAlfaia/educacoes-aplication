// https://adm.educacoes.com.br/storage/uploads/logo/
import axios from 'axios';

const logoApi = axios.create({
    baseURL: "https://adm.educacoes.com.br/storage/uploads",
});

export default logoApi;