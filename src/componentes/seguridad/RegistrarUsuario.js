import { Avatar, Container, Grid, Card, Icon, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import {Link} from 'react-router-dom'


const RegistrarUsuario = () => {
    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Grid container justifyContent='center'>
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color='primary'>Registro de Usuario</Typography>

                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField 
                                    label="Apellidos"
                                    variant="outlined"
                                    fullWidth
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Email"
                                    variant='outlined'
                                    fullWidth
                                    type="email"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <TextField 
                                    label = "Password"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    >
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                            to="/login"
                            variant="body1"
                            className={classes.link}
                            >
                                ¿Ya tienes una cuenta?, Logueate
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegistrarUsuario;