import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

 const MenuMovil = (props) => {
    const [openCliente, setOpenCliente] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    }

    const handleClickAdmin = () => {
        setOpenAdmin((prevOpen) => !prevOpen);
    }

    const classes = useStyles();
    return(
        <>
            <ListItem button onClick={handleClickCliente} className={classes.ListItem}>
                <div className={classes.linkAppBarMobile}>
                    <Avatar
                    alt="mi imagen"
                    className={classes.avatarPerfilAppBar}
                    src="https://i.pinimg.com/736x/88/52/7d/88527d9e87b400a4f5f78b3da0208e1b.jpg"
                    />
                    <ListItemText>Mario</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>  
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Mi Perfil
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Cerrar Sesion
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <Divider/>
                </List>
            </Collapse>
            {/**Admin */}
            <ListItem button onClick={handleClickAdmin} className={classes.ListItem}>
                <div className={classes.linkAppBarMobile}>
                   <ListItemIcon className={classes.ListItemIcon}>
                    <Icon>admin_panel_settings</Icon>
                   </ListItemIcon>
                   <ListItemText>Admin</ListItemText>
                   <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>  
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/Usuarios">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Usuarios
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Productos
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider/>
                </List>
            </Collapse>
            {/**fin Admin */}
            <ListItem button className={classes.listItem} 
            onClick={props.clickHandler}>
                <Link className={classes.linkAppBarMobile} to="/carrito">
                    <ListItemIcon className={classes.ListItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        Mis Pedidos
                    </ListItemText>
                </Link>
            </ListItem>
        </>
    );
 };

 export default MenuMovil;