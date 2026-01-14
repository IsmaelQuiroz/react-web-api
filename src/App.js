import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <RegistrarUsuario/>
    </ThemeProvider>
  );
}

export default App;
