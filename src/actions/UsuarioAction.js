import axios from 'axios';
import HttpCliente from '../servicios/HttpCliente';
import { uploadImage } from '../supabase/supabaseCredentials';

const instancia = axios.create(); //instancia se va utilizar donde no se requiere enviar Token
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarUsuario = async (id, usuario, dispatch) => {
    if(usuario.file){
        const urlImage = await uploadImage(usuario.file);
        usuario.imagen = urlImage;
    }

    return new Promise( (resolve, eject) => {
        HttpCliente.put(`/api/usuario/actualizar/${id}`, usuario)
        .then(response => {
            dispatch({
                type: "ACTUALIZAR_USUARIO",
                nuevoUsuario: response.data,
                autenticado: true
            });
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        })

    });
    
}


export const registrarUsuario = (usuario, dispatch) => {
    return new Promise( (resolve, eject) => {
        instancia.post("/api/usuario/registrar", usuario).then( response => {

            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })

            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}


//Un objeto Dispatch es parte de las librerias del ContextAPI ReactHooks
//el objeto Dispatch permite llamar al reducer y l reducer actualizará la variable Global

export const loginUsuario = (usuario, dispatch) => {
    return new Promise ( (resolve, eject) => {
        instancia.post("/api/usuario/login", usuario).then(response => {

            dispatch({
                type: "INICIAR_SESION",
                sesion : response.data,
                autenticado: true
            })

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
export const getUsuario = (dispatch) => {
    return new Promise ( (resolve, eject) => {
        HttpCliente.get("/api/usuario").then(response => {

            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })

            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        })
    });
}