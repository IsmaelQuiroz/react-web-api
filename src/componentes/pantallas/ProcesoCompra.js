import { Container, Step, Stepper, StepLabel } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import useStyles from '../../theme/useStyles';

const ProcesoCompra = () => {
    const [activeStep, setActiveStep] = useState(1);
    const classes = useStyles();

    return(
        <Container className={classes.containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envío</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de Pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>
            </Stepper>
        </Container>
    );
};

export default ProcesoCompra;