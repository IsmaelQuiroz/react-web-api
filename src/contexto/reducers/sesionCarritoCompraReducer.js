import { StaticRouter } from "react-router-dom/cjs/react-router-dom.min";

export const initialState = {
    id: "",
    items: []
}

//El Reducer permitirá actualizar la data del carrito de compra como una variable global
const sesionCarritoCompraReducer = (state = initialState, action) => {
    switch(action.type){
        case "CARRITO_SESION":
            return{
                ...state,
                id: action.id,
                items: action.items
            };
        default : return state;
    }
}

export default sesionCarritoCompraReducer;