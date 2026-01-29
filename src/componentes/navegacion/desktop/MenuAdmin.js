import { Avatar, Button, Icon,  ListItemIcon,  ListItemText,  Menu, MenuItem } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const MenuAdmin = () => {
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
                <Button color="inherit"  className={classes.buttonIcon}
                onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Icon className={classes.mr}>admin_panel_settings</Icon>
                            ADMIN
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
                        <Link className={classes.linkAppBarMobile} to="/admin/usuarios">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Usuarios
                            </ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listaProductos">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>
        </>
    )
}

export default MenuAdmin;