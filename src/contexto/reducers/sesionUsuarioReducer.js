export const initialStateLocal = {
    usuario: {
        id: "",
        nombre: "",
        apellido: "",
        email: "",
        username: "",
        imagen: ""
    },
    autenticado: false
}

//El funcion sesionUsuarioReducer va llevar la variable local initialStateLocal al interior de contexto/initialState.js

const sesionUsuarioReducer = (state = initialStateLocal, action) => {
    switch(action.type){
        case "INICIAR_SESION" :
            return {
                ...state,
                usuario: action.sesion,
                autenticado : action.autenticado
            };
        case "SALIR_SESION" :
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        case "ACTUALIZAR_USUARIO":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            }
        default: return state;
    }
}

export default sesionUsuarioReducer;