import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const ListaPedidos = (props) => {
    const classes = useStyles();

    const  verDetalle = () => {
        const id= "8efbd5f7-35b7-4d05-bd75-eb77b7c53541";
        props.history.push("/ordenCompra/"+id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell>2874ec6f-b562-4a6b-afcc-b6560f6dcf8a</TableCell>
                            <TableCell>Mario Isamel</TableCell>
                            <TableCell>2020-12-22</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2020-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivery}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>8efbd5f7-35b7-4d05-bd75-eb77b7c53541</TableCell>
                            <TableCell>Javier Ramirez</TableCell>
                            <TableCell>2020-12-22</TableCell>
                            <TableCell>$150.00</TableCell>
                            <TableCell>2012-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivery}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>    
    );
};

export default ListaPedidos;