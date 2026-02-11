import { Typography, Container, Grid, CardMedia, Avatar, CardContent, Button, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../theme/useStyles';
import { getProductos} from '../../actions/ProductoAction';
import { ProductoArray } from '../data/dataPrueba';
import { Pagination } from '@material-ui/lab';


const Productos = (props) => { //props es para cuando quiero utilizar las propiedades de mi componente Productos
    //console.log('REACT_APP_URL_BASE', process.env.REACT_APP_URL_BASE);

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    //en este objeto se va setear en automatico la data que venga del servidor
    //los campos se corresponden con estas propiedades
    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data:[]
    });

    const handleChange = (event, value) => {
        setRequestProductos( (anterior) => ({
            ...anterior,
            pageIndex : value
        }) );
    };

    //funcion para ejecutar el action que va devolver los productos
    //este metodo es propio de los componentes ReactHooks, se ejecuta al momento que el componente es cargado en el browser
    useEffect(() => {
        const getListaProductos = async () => { //async es porque se esta trabajando con promesas
              const response = await getProductos(requestProductos);  
              /*la estructura del objeto de la variable de estado que recibe, es identica a la que va enviar el server en el objeto response
              entonces se va mapear automáticamente */
              console.log(response.data);
              setPaginadorProductos(response.data); //para obtener solo el Body de response
              //un objeto tipo response del servidor esta compuesto por un Header y un Body principalmente
        };

        getListaProductos();
    },[requestProductos]); 
    //[] esta parte es para indicar que solo se ejecute 1 sola ves la función contenida en el useEffect
    //[nombreVariableEstado] para que el useEffect se ejecute cada vez que cambie alguno de los valores de la variable de estado

    const verProducto = (id) => {
        props.history.push("/detalleProducto/"+id); //esta ruta tiene un parametro id, tal y como lo definimos en App.js
    }

    const miArray = ProductoArray;
    const classes = useStyles();

    if(!paginadorProductos.data){ //si no existe
        return null; //para que no pinte nada
    }

    return(

        <Container className = {classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {/* {miArray.map(data => ( //map esto es un bucle */}
                {paginadorProductos.data.map(data => ( //esto es un bucle
                <Grid item lg={3} md={4} sm={6} xs ={12} key={data.key}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        //image="https://lagatavoladora.com/wp-content/uploads/2025/10/Chaqueta-forro-polar-boho-Flora-marca-Coline-La-Gata-Voladora-4.png"
                        image={data.atributo}
                        title="Producto Image">
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.nombre}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data.id)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>

            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}/>

        </Container>
    )
}

export default Productos;