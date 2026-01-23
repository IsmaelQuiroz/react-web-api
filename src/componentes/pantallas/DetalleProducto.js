import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const DetalleProducto = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Abrigo cálido de invierno
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper className={classes.PaperImg} variant="outlined" square>
                        <CardMedia 
                        className={classes.mediaDetalle}
                        image="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202406/25/00151057402359____9__440x546.jpg" 
                        title="Mi producto"/>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">$25.99</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                        size="small"
                                        select
                                        variant="outlined">
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Button 
                                        variant="contained"
                                        color="primary"
                                        size="large">
                                            Agregar a Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacion={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: $25.99
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades Disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: Weekend
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripcion:
                            </Typography>
                            <Typography className={classes.text_detalle}>
                            Abrigo solapa redonda con 6 botones funcionales para ajuste cruzado. Ceñido en cintura. 
                            Posee bolsillos funcionales, tajo en la parte posterior y forro.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;