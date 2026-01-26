import { Typography, Container, Grid, CardMedia, Avatar, CardContent, Button, Card } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';


const Productos = (props) => { //props es para cuando quiero utilizar las propiedades de mi componente Productos
    console.log('REACT_APP_URL_BASE', process.env.REACT_APP_URL_BASE);

    const verProducto = (id) => {
        props.history.push("/detalleProducto/"+id); //esta ruta tiene un parametro id, tal y como lo definimos en App.js
    }

    const miArray = ProductoArray;
    const classes = useStyles();
    return(

        <Container className = {classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {miArray.map(data => (
                <Grid item lg={3} md={4} sm={6} xs ={12} key={data.key}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        //image="https://lagatavoladora.com/wp-content/uploads/2025/10/Chaqueta-forro-polar-boho-Flora-marca-Coline-La-Gata-Voladora-4.png"
                        image={data.image}
                        title="Producto Image">
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.titulo}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data.key)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Productos;