import React from "react";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../../../theme/useStyles";
import ImageUploader from "react-images-upload";
import { registrarProducto } from "../../../actions/ProductoAction";
import { v4 as uuidv4} from "uuid";

const AgregarProducto = () => {

    const defaultImage= "https://lagatavoladora.com/wp-content/uploads/2025/10/Chaqueta-forro-polar-boho-Flora-marca-Coline-La-Gata-Voladora-4.png"; 
    const [categoria, setCategoria] = React.useState("");
    const [marca, setMarca] = React.useState("");
    const [producto, setProducto] = React.useState({
        id:0,
        nombre:'',
        descripcion:'',
        stock:0,
        marcaId: 0,
        categoriaId:0,
        precio:0.0,
        imagen: '',
        file: '',
        imagenTemporal: null
    });

    const handleCategoriaChange= (event) => {
        setCategoria(event.target.value);
    }

    const handleMarcaChange = (event) => {
        setMarca(event.target.value);
    }

    const guardarProducto = async () => {

        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const resultado = await registrarProducto(producto)
        
        console.log('resultado de guardar producto', resultado);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProducto(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const subirImagen = imagenes => {
        const foto = imagenes[0];
        setProducto((prev) => ({
            ...prev,
            file: foto
        }))
    }

   

    const classes = useStyles();

    const keyImage = uuidv4();

  return (
    <Container className={classes.containermt}>
      <Grid container justify="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.text_title}>
            AGREGAR PRODUCTO
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <TextField
              label="Nombre Producto"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{
                shrink: true,
              }}
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
            />
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{
                shrink: true,
              }}
              name="precio"
              value={producto.precio}
              onChange={handleChange}
            />

            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              className={classes.gridmb}
              InputLabelProps={{
                shrink: true,
              }}
              name="stock"
              value={producto.stock}
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
                shrink: true,
              }}
              name="descripcion"
              value={producto.descripcion}
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
                <InputLabel id="categoria-select-label">Categoria</InputLabel>
                <Select
                labelId="categoria-select-label"
                id="categoria-select"
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
                  withIcon={true}
                  singleImage={true}
                  key={keyImage}
                  buttonText="Buscar Imagen"
                  imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
                  maxFileSize={5242880}
                  onChange={subirImagen}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Avatar variant="square" className={classes.avatarProducto} />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={guardarProducto}>
              AGREGAR
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AgregarProducto;
