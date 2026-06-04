import { Snackbar, ThemeProvider } from "@material-ui/core";
import React from "react";
import MenuAppBar from "./componentes/navegacion/MenuAppBar";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "./componentes/pantallas/Productos";
import DetalleProducto from "./componentes/pantallas/DetalleProducto";
import CarritoCompras from "./componentes/pantallas/CarritoCompras";
import ProcesoCompra from "./componentes/pantallas/ProcesoCompra";
import OrdenCompra from "./componentes/pantallas/OrdenCompra";
import Perfil from "./componentes/seguridad/Perfil";
import Usuarios from "./componentes/pantallas/admin/Usuarios";
import EditarUsuario from "./componentes/pantallas/admin/EditarUsuario";
import ListaProductos from "./componentes/pantallas/admin/ListaProductos";
import AgregarProducto from "./componentes/pantallas/admin/AgregarProducto";
import EditarProducto from "./componentes/pantallas/admin/EditarProducto";
import ListaPedidos from "./componentes/pantallas/admin/ListaPedidos";
import { useEffect } from "react";
import { useState } from "react";
import { getUsuario } from "./actions/UsuarioAction";
import { useStateValue } from "./contexto/store";
import { v4 as uuidv4 } from "uuid";
import {getCarritoCompra} from './actions/CarritoCompraAction';

function App() {
  //esta constante representa los valores del ContextAPI
  //se esta coonsumiento el sesionUsuario, ahora tambien se quiere consumir el openSnackbar
  //openSnackbar va contener solo la data que se va mostrar, estado  y mensaje del snackBar
  const [{ sesionUsuario, openSnackbar }, dispatch] = useStateValue();

  //Evento a ejecutar cuando se halla terminado desplegar el codigo HTML de este componente,
  //el codigo HTML es el inferior los Route
  const [servidorRespuesta, setservidorRespuesta] = useState(false);

  useEffect(async () => {
    let carritoCompraId = window.localStorage.getItem("carrito");

    if (!carritoCompraId) {
      carritoCompraId = uuidv4();
      window.localStorage.setItem("carrito", carritoCompraId);
    }

    if (!servidorRespuesta) {
      await getUsuario(dispatch);
      await getCarritoCompra(dispatch, carritoCompraId);

      setservidorRespuesta(true);
    }
  }, [servidorRespuesta]);

  return (
    <ThemeProvider theme={theme}>
      
      <Snackbar  //está declarado a nivel del App para que el snackbar sea utilizado por todos los hijos, es decir cualquier componente de mi proyecto
         anchorOrigin={{vertical: "bottom", horizontal : "center"}}
         open={openSnackbar ? openSnackbar.open : false}
         autoHideDuration={3000}
         ContentProps={{"aria-describedby":"message-id"}}
         message={
           <span id="message-id">
              {openSnackbar ? openSnackbar.mensaje: ""}
           </span>
        }
        onClose={ () => {
          dispatch({ //dispatch es la función que cambia la variable de estado global openSnackbar del ContextAPI
            type: "OPEN_SNACKBAR", //este type sirve de guía hacia que reducer va ejecutar
            openMensaje: {
              open: false,
              mensaje: ""
            }
          })
        }}
      >

      </Snackbar>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={RegistrarUsuario} />
          <Route exact path="/" component={Productos} />
          <Route
            exact
            path="/detalleProducto/:id"
            component={DetalleProducto}
          />
          <Route exact path="/carrito" component={CarritoCompras} />
          <Route exact path="/procesoCompra" component={ProcesoCompra} />
          <Route exact path="/ordenCompra/:id" component={OrdenCompra} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/admin/usuarios" component={Usuarios} />
          <Route exact path="/admin/usuario/:id" component={EditarUsuario} />
          <Route
            exact
            path="/admin/listaProductos"
            component={ListaProductos}
          />
          <Route
            exact
            path="/admin/agregarProducto"
            component={AgregarProducto}
          />
          <Route
            exact
            path="/admin/editarProducto/:id"
            component={EditarProducto}
          />
          <Route exact patch="/admin/listaPedidos" component={ListaPedidos} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
