import { AppBar, Container, Link, Toolbar, Typography,Icon, Button, IconButton, Drawer,List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import useStyles from '../../theme/useStyles';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openToggle = () => {
        setOpen(true);
    }

    const closeToggle = () => {
        setOpen(false);
    }

    return(
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color="inherit" onClick={openToggle}>
                                <Icon fontSize='large'>menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer open={open} onClose={closeToggle}>
                            <div className={classes.list}>
                                <List>
                                    <ListItem button onClick={closeToggle} className={classes.ListItem}>
                                        <Link color="inherit" className={classes.linkAppBarMobile} underline="none">
                                            <ListItemIcon className={classes.ListItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>Login</ListItemText>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <Link color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5">PapeleriaS4 SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit" className={classes.buttonIcon}>
                                <Link color="inherit" className={classes.linkAppBarDesktop}  underline="none">
                                    <Icon className={classes.mr}>person</Icon>
                                    LOGIN
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;