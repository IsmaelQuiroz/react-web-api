import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsuarios } from '../../../actions/UsuarioAction';
import useStyles from '../../../theme/useStyles';
import { withRouter } from 'react-router-dom';

const Usuarios = (props) => {
    //para el request que se envía al server
    const [requestUsuarios, setRequestUsuarios] = useState({
       pageIndex : 1,
       pageSize: 3,
       search : '' 
    });

    //contenedor de los datos que devuelva el server
    const [paginadorUsuarios, setPaginadorUsuarios] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    //evento para controlar el click en número de pagina
    const handleChange = (event, value) => {
        setRequestUsuarios( (anterior) => ({
            ...anterior,
            pageIndex : value
        }))
    }

    useEffect( () => {
        
        const getListaUsuarios = async () => {
            const response = await getUsuarios(requestUsuarios);
            setPaginadorUsuarios(response.data);
        }

        getListaUsuarios();

    },[requestUsuarios])


    const classes = useStyles();

    const editaUsuario = (id) => {
        //const id = "19ffd769-cf4d-4d0a-8907-f745fd32320b";
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
                            <TableCell>USERNAME</TableCell>
                            <TableCell>Perfil</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {console.log('data_user', paginadorUsuarios.data)}
                        {
                            paginadorUsuarios.data.map( (usuario) => (
                               
                                <TableRow key={usuario.id}>
                                    <TableCell>{usuario.id}</TableCell>
                                    <TableCell>{usuario.nombre + ' ' + usuario.apellido}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>{usuario.username}</TableCell>
                                    <TableCell>{
                                        usuario.admin ? "admin" :''
                                    }</TableCell>
                                    <TableCell>
                                        <Button
                                        variant="contained"
                                        color='primary'
                                        onClick={
                                            () => editaUsuario(usuario.id)}
                                        >
                                           <Icon>edit</Icon>     
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginadorUsuarios.pageCount} page={paginadorUsuarios.pageIndex} onChange={handleChange}/>
        </Container>
    );
};

export default withRouter(Usuarios);