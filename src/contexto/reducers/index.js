import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer"
import sesionUsuarioReducer from "./sesionUsuarioReducer"

//para que funcionen los reducers definidos, se deben de registrar en esta funcion del index
export const mainReducer = ({sesionUsuario, sesionCarritoCompra}, action) => {
    return{
        sesionUsuario : sesionUsuarioReducer(sesionUsuario , action),
        sesionCarritoCompre: sesionCarritoCompraReducer(sesionCarritoCompra, action)
    }
} 