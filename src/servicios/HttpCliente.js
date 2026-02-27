import axios from 'axios';

//asignamos URL base del BackEnd a donde va conectarse
axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

//Definicion de interceptor de axios
//permite pasar en los request al servidor cierta data adicional
//que puede incluirse dentro del Header o dentro del body
//se incluye token de seguridad siempre y cuando exista dentro del browser
axios.interceptors.request.use( (config) => {
    const token_seguridad = window.localStorage.getItem('token');

    if(token_seguridad){
        config.headers.Authorization = 'Bearer ' + token_seguridad;
        return config;
    }
}, error => {
    return Promise.reject(error);
});

//Operaciones Genéricas
//Pedido que nosotros enviamos desde react hacia el server backEnd

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
}

export default requestGenerico;