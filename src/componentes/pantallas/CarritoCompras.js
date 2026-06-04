import { Button,CardMedia,Container,Divider,Grid,Icon,IconButton,MenuItem,Paper,Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Select } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';
import {useStateValue} from '../../contexto/store';

const CarritoCompras = (props) => {

    const [{sesionCarritoCompre}, dispatch] = useStateValue();
    
    console.log('sesionCarritoCompra', sesionCarritoCompre);

    const miArray = sesionCarritoCompre ? sesionCarritoCompre.items : []; /*ProductoArray;*/
    let suma = 0;
    miArray.forEach(prod => {
        suma += prod.precio;    
    });

    const realizarCompra =() => {
        props.history.push("/procesoCompra");
    }

    const defaultImagen = "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202406/25/00151057402359____9__440x546.jpg";
    const classes  = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                CARRITO DE COMPRAS
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {miArray.map(item =>(
                                    <TableRow key={item.id}>
                                         <TableCell>
                                             <CardMedia 
                                             className={classes.imgProductoCC}
                                             image={item.imagen ? item.imagen : defaultImagen}
                                             title={item.producto}
                                             />
                                         </TableCell>
                                         <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                {item.producto}
                                            </Typography>
                                         </TableCell>
                                         <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                ${item.precio}
                                            </Typography>
                                         </TableCell>
                                         <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                {item.cantidad}
                                            </Typography>
                                            {/* <Select
                                            defaultValue={1}
                                            variant="outlined"
                                            size="small">
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                            </Select> */}
                                         </TableCell>
                                         <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                         </TableCell>
                                    </TableRow>
                                ) )}
                               
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Paper variant="outlined" square className={classes.papperPadding}>
                        <Typography variant="h6" className={classes.text_title} >
                            SUBTOTAL ({miArray.length}) PRODUCTOS
                        </Typography>
                        <Typography className={classes.text_title} >
                          {suma}
                        </Typography>
                        <Divider className={classes.gridmb}/>
                        <Button
                        variant="contained" 
                        color="primary"
                        size="large"
                        onClick={realizarCompra}>REALIZAR COMPRA</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarritoCompras;