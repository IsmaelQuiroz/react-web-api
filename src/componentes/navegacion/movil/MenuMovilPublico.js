import { Icon,  ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Link } from 'react-router-dom';

const MenuMovilPublico = (props) => {
    const classes = useStyles();
    return (
        <>
        <ListItem button onClick={props.clickHandler} className={classes.ListItem}>
            <Link to="/login" className={classes.linkAppBarMobile}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
            </Link>
        </ListItem>
        <ListItem button onClick={props.clickHandler} className={classes.ListItem}>
            <Link to="/carrito" className={classes.linkAppBarMobile}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <Icon>shopping_cart</Icon>
                </ListItemIcon>
                <ListItemText>Mis Pedidos</ListItemText>
            </Link>
        </ListItem>
        </>
    );
};

export default MenuMovilPublico;