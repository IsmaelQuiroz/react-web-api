import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography, Link, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    containermt:{
        marginTop: 30
    },
    card:{
        padding: 30
    },
    avatar:{
        backgroundColor: '#3a0ca3',
        width: 80,
        height: 80
    },
    icon : {
        fontSize: 60
    },
    form :{
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link: {
        marginTop: 8
    }
})

const Login = () => {
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
                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField 
                                    label ="Email"
                                    variant = "outlined"
                                    fullWidth
                                    type="Email"
                                    />
                                </Grid>
                                <Grid item xs={12}  className={classes.gridmb}>
                                    <TextField
                                    label="password"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    />
                                </Grid>
                                <Grid item  xs={12}  className={classes.gridmb}>
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color='primary'>
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                            href="/"
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