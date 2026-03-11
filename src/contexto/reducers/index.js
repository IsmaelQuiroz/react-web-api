import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer"
import sesionUsuarioReducer from "./sesionUsuarioReducer"

//para que funicionen los reducers definidos, se deben de registrar en esta funcion del index
export const mainReducer = ({sesionUsuario, sesionCarritoCompra}, action) => {
    return{
        sesionUsuario : sesionUsuarioReducer(sesionUsuario , action),
        sesionCarritoCompra: sesionCarritoCompraReducer(sesionCarritoCompra, action)
    }
} 