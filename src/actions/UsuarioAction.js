import axios from 'axios';
import HttpCliente from '../servicios/HttpCliente';

const instancia = axios.create(); //instancia se va utilizar donde no se requiere enviar Token
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarUsuario = usuario => {
    return new Promise( (resolve, eject) => {
        instancia.post("/api/usuario/registrar", usuario).then( response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}

export const loginUsuario = usuario => {
    return new Promise ( (resolve, eject) => {
        instancia.post("/api/usuario/login", usuario).then(response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}

//Las Autorizaciones y configuración del request van dentro del Header 
//por ello no se considera el parametro usuario en la funcion del action, 
//se pasaria el token a través del header
export const getUsuario = () => {
    return new Promise ( (resolve, eject) => {
        HttpCliente.get("/api/usuario").then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        })
    });
}