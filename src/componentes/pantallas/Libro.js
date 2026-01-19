import React from 'react';
import { Button, Card, Container, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';

const Libro = () => {
    const classes = useStyles();
    return(
       <Container className={classes.containermt}>
            <Grid container justify="center">
               <Grid item lg={7} md={8}>
                <Card className = {classes.card} align="center">
                    <Typography variant="h4">Libros</Typography>
                    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                        <Grid container spacing={2}>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField
                                select 
                                label="Categoria"
                                variant="outlined"
                                fullWidth
                                align="left">
                                    <MenuItem value="Programacion">Programacion</MenuItem>
                                    <MenuItem value="Historia">Historia</MenuItem>
                                    <MenuItem value="Matematica">Matematica</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField
                                label="Titulo"
                                variant="outlined"
                                fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField
                                label="Autor"
                                variant="outlined"
                                fullWidth
                                />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                type="submit">
                                    Guardar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
               </Grid>
            </Grid> 
       </Container>
    );
};

export default Libro;