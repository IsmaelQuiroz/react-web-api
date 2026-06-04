import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../../theme/useStyles';
import ImageUploader from 'react-images-upload';
import { getProducto, actualizarProducto } from '../../../actions/ProductoAction';
import {v4 as uuidv4} from 'uuid';

const EditarProducto = (props) => { //pops permite acceder a los valores de la url
    const defaultImage= "https://lagatavoladora.com/wp-content/uploads/2025/10/Chaqueta-forro-polar-boho-Flora-marca-Coline-La-Gata-Voladora-4.png";
    const [producto, setProducto] = useState({
        id: 0,
        nombre:'',
        descripcion:'',
        stock: 0,
        marcaId:0,
        categoriaId: 0,
        precio: 0.0,
        file: "",
        imagen:'',
        imagenTemporal: null
    });

    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");

    const handleCategoriaChange = event => {
        setCategoria(event.target.value);
    }
 
    const handleMarcaChange = event => {
        setMarca(event.target.value);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProducto( (prev) => ({
            ...prev,
            [name] : value
        }));
    };

    const subirImagen = (imagenes) => {
        let foto = imagenes[0];

        //transformación de foto a imagenUrl
        let fotoUrl = "";
        try{
            fotoUrl = URL.createObjectURL(foto);
        }catch(er){
            console.log(er);
        }

        setProducto( (prev) => ({
            ...prev,
            file : foto,
            imagenTemporal: fotoUrl
        }));
    };


    //la llamada al servidor debe ocurrir cuando ya se carge el componente React
    useEffect( () => {
        const id = props.match.params.id; //asi se camptura del id del producto de la url
        const getProductoAsync = async () => {
            const response = await getProducto(id);
            setProducto(response.data);
            setCategoria(response.data.categoriaId);
            setMarca(response.data.marcaId);
        }
        getProductoAsync();
    },[])

    const guardarProducto = async () => {
        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const id = props.match.params.id;
        const resultado = await actualizarProducto(id,producto);
        console.log(resultado);
        props.history.push("/admin/listaProductos");
    };

    const keyImage = uuidv4();    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        EDITAR PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField
                        label="Nombre Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={producto.nombre}
                        name="nombre"
                        onChange={handleChange}
                        />
                        <TextField
                        label="Precio"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={producto.precio} 
                        name="precio"
                        onChange={handleChange}
                        />                        
                        <TextField
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={producto.stock} 
                        name="stock"
                        onChange={handleChange}
                        />
                        <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={producto.descripcion} 
                        name="descripcion"
                        onChange={handleChange}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="marca-select-label">Marca</InputLabel>
                            <Select
                            labelId="marca-select-label"
                            id="marca-select"
                            value={marca}
                            onChange={handleMarcaChange}
                            >
                                <MenuItem value={8}>Kingstong</MenuItem>
                                <MenuItem value={9}>ADATA</MenuItem>
                                <MenuItem value={10}>1 HORA</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="categoria-select-label">Categoría</InputLabel>
                            <Select
                                labelId="categoria-select-label"
                                id="categoria-label"
                                value={categoria}
                                onChange={handleCategoriaChange}
                        >
                                <MenuItem value={1}>Bocinas</MenuItem>
                                <MenuItem value={2}>Impresiones</MenuItem>
                                <MenuItem value={3}>Audifonos Wireless</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader 
                                singleImage={true}
                                key={keyImage}
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg','.jpeg','.png','.gif']}
                                maxFileSize={5242880}
                                onChange={subirImagen}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                               <Avatar
                               variant="square"
                               className={classes.avatarProducto}
                               src={
                                        producto.imagenTemporal 
                                        ? producto.imagenTemporal 
                                        : (producto.imagen ? producto.imagen : defaultImage)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button 
                        variant="contained"
                        color="primary"
                        onClick={guardarProducto}
                        >
                            ACTUALIZAR
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarProducto;