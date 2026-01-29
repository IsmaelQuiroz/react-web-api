import { Avatar, Button, Icon,  ListItemIcon,  ListItemText,  Menu, MenuItem } from '@material-ui/core';
import React from 'react'
import useStyles from '../../../theme/useStyles';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const MenuCliente = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) =>{
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const classes = useStyles();
    return (
        <>
            <Button color ="inherit" className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to="/carrito">
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button>
            <div>
                <Button color="inherit"  className={classes.buttonIcon}
                onClick={handleClick}>
                        <div className={classes.linkAppBarDesktop}>
                        <Avatar
                        alt="mi imagen"
                        className={classes.avatarPerfilAppBar}
                        src="https://i.pinimg.com/736x/88/52/7d/88527d9e87b400a4f5f78b3da0208e1b.jpg"
                        />
                        Mario Ismael
                        <Icon>keyboard_arrow_down</Icon>
                    </div>                   
                </Button>
                <Menu
                elevation={2} //Elevación del Menú 
                anchorEl={anchorEl} //posición de menú , anchorE1 es una variable
                getContentAnchorEl={null} /* Es para recuperar el elemento de anclaje */
                anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                }} //Punto de ancla para unir el anchorEl al pupOver con el que trabaja este componente Menu  
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }} //Es para unir el pupOver al origen  del ancla
                keepMounted //para mantener a los elementos hijos en el DOOM
                open={Boolean(anchorEl)} //para saber si el menu es visible, si tiene valor es true, si no = false
                onClose={handleClose}>
                    {/*Elementos Hijos */}
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Mi Perfil
                            </ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar_sesion</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default MenuCliente;