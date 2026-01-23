import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme();

const useStyles = makeStyles({
    containermt:{
        marginTop: 30
    },
    card:{
        padding: 30
    },
    avatar:{
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80
    },
    icon : {
        fontSize: 60
    },
    form :{
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link: {
        marginTop: 8,
        fontSize:"1.1rem",
        fontFamily:"Roboto",
        lineHeight:1.5,
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    appBar: {
        paddingTop:8,
        paddingBottom:8
    },
    grow:{
        flexGrow: 0, // si es menor a md (960px) que no tome ningun espacio
        [theme.breakpoints.up('md')]:{
            flexGrow: 1  /* El elemento crezca hasta llegar al punto de interrupción, es decir el elemento tome todo el espacio */
        }
    },
    linkAppBarLogo: {
        display:"inline-flex", /*Elementos en una sola línea sin relleno */
        alignItems: "center", /* colocar sus elementos al centro verticalmente */
        color:"inherit",
        textDecoration:"none"
    },
    mr: {
        marginRight: 3
    },
    buttonIcon: {
        fontSize : 14,
        padding: 0
    },
    linkAppBarDesktop: {
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration:"none"
    },
    list : {
        width: 250
    },
    ListItem: {
        pading: 0
    },
    linkAppBarMobile : {
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    ListItemIcon: {
        minWidth: 35
    },
    sectionDesktop : {
        display: "none", //si es menor que md (960px) oculta los elementos
        [theme.breakpoints.up('md')] : { /* Si el ancho de pantalla es mayor que md(960px) */
            display: "flex" //Se muestran los elementos
        }
    },
    sectionMobile : {
        display: "flex",
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display:'none'
        }
    },
    text_title : {
        fontWeight: 600, //relleno de texto
        color: "#494949",
        marginBottom: 10
    },
    media : {
        height: 320,
        backgroundColor : "#F2F2F2",
        margin: "15px 15px 0 15px"
    },
    price : {
        float: "right", //que flote hacia la derecha
        padding: "0 20px 0 20px",
        backgroundColor: "#0f80aa"
    },
    text_card: {
        fontWeight: "bold",
        color: "#656565",
        marginBottom: 8
    },
    PaperImg : {
        backgroundColor: "#F2F2F2"
        
    },
    mediaDetalle: {
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_detalle: {
        fontWeight: 500,
        color: "#494949",
        marginBottom: 5
    }

})

export default useStyles;