import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from '../../../theme/useStyles';

const Usuarios = (props) => {
    const classes = useStyles();

    const editaUsuario = () => {
        const id = "19ffd769-cf4d-4d0a-8907-f745fd32320b";
        props.history.push("/admin/usuario/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>7a3bc556-a8b0-4112-84d3-fbdf007d1a40</TableCell>
                            <TableCell>Victoria del Carmen</TableCell>
                            <TableCell>vdc@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivery}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained"
                                color="primary"
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button
                                variant="contained"
                                color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>19ffd769-cf4d-4d0a-8907-f745fd32320b</TableCell>
                            <TableCell>Javier Nepomuseno</TableCell>
                            <TableCell>javi@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivery}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained"
                                color="primary"
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button
                                variant="contained"
                                color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuarios;