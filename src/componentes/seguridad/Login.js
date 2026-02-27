import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { Link} from 'react-router-dom';
import { loginUsuario } from '../../actions/UsuarioAction';
import { useState } from 'react';


const clearUsuario = {
    email: '',
    password: ''
}

const Login = (props) => {
    const [usuario, setUsuario] = useState({
        email: '',
        password:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name] : value
        }) )
    }

    const loginEventoUsuario = () => {
        loginUsuario(usuario).then((response) => {
            if(response.status === 200){
                window.localStorage.setItem('token', response.data.token);
                console.log('el login fue exitoso', response.data);
                props.history.push('/');
            }else{
                console.log('las credenciales fueron erroneas', response.data);
            }
        })
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container  justifyContent='center' >
                <Grid item lg={5} md={6}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar}>
                          <Icon className={classes.icon}>person</Icon>    
                        </Avatar>
                        <Typography variant='h5' color='primary'>Ingrese su Usuario</Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField 
                                    label ="Email"
                                    variant = "outlined"
                                    fullWidth
                                    type="Email"
                                    value={usuario.email}
                                    name="email"
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}  className={classes.gridmb}>
                                    <TextField
                                    label="password"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    value={usuario.password}
                                    name="password"
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item  xs={12}  className={classes.gridmb}>
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    onClick={loginEventoUsuario}>
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                            to="/registrar"
                            variant="body1"
                            className={classes.link}
                            >
                                ¿No tienes cuenta?, Regístrate
                            </Link>
                        </form>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;