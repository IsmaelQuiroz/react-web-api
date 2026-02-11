import axios from 'axios';

//asignamos URL base del BackEnd a donde va conectarse
axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

//Operaciones Genéricas
//Pedido que nosotros enviamos desde react hacia el server backEnd

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
}

export default requestGenerico;