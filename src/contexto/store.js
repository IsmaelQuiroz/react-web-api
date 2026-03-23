import React, { createContext, useContext, useReducer} from 'react';

//esto objeto va almacenar las variables de estado 
//por ejemplo la variable definida en el initialState.js
export const StateContext = createContext();

//para acceder a los valores del initialState.js, se crea una función que 
//va tener 3 parámetros de trabajo
//1 una funcion de tipo Operación ( función tipo Reducer)
//2 El valor que quiero modificar ( variable Global a la cual quieres tener acceso)
//3 Los objetos que tendran acceso a este createContext (los componentes ReactHooks 
//               que tendrana acceso a estos valores Globales que se encuentran en InitialState)

//La función StateProvider es crear un envoltorio global sobre todos los componentes
//ReactHooks de mi proyecto haciendo que las variables que se declaren dentro del stateContext 
//tambien sean globales

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
