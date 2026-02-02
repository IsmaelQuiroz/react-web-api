import HttpCliente from '../servicios/HttpCliente';

//Crea primero un objeto tipo request tomando la URL base de nuestro server backEnd
//Luego le tengo que agregar el EndPoint que representa la lista de productos
export const getProductos = () =>{
    return new Promise((resolve, eject) => { 
        //una promesa permite espear la respuesta del server antes de continuar la ejecucion
        //de la siguiente linea de código, 

        //se hace la llamada al server
        HttpCliente.get('/api/producto').then( response => {//lo que retorna el then es un objeto response, es lo que se le va devolver al cliente
                resolve(response); //La respuesta va envuelta en un objeto resolve
                //lo que hace el resolve es indicarle a la función aquí me llegó la data, aqui terminó la Operación. 
                //y tambiente devuelve la data al cliente o componente react que la solicita
        }); 
    }) 
    //resolve: el valor que va retornar, lista de productos que voy a devolver al cliente
    //eject: permite terminar la operación en el momento que yo crea conveniente
}

/*El objeto response: devuelve la data de una forma especial, que depende de la forma en la que 
devuelve la data el EndPoint, devuelve las siguientes propiedades en formato JSON

//esto es lo que devuelve el servidor, es la estructura genérica de un objeto response

count: 5    //es la cantidad de Elementos que va devolvernos (Entero)
pageIndex:1 //que página es la que quieres que devuleva 
pageSize: 5 //
pageCount: 3 //Cantidad de elementos por página
data: [  
    Objeto JSON
   {....}, //es una colección de elementos producto
   {....}
] 

*/

/*La paginación la hemos venido implementando dentro de nuestro BackEnd */