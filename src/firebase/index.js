import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration to connect with your Reat app
const firebaseConfig = {
    apiKey: "AIzaSyD-adznfYpCG4wzjNBLbgScMuu1VBIm-Dg",
    authDomain: "ecommerce-7d9b0.firebaseapp.com",
    projectId: "ecommerce-7d9b0",
    storageBucket: "ecommerce-7d9b0.firebasestorage.app",
    messagingSenderId: "843696382291",
    appId: "1:843696382291:web:a24e10ca44fe46613b01a6"
  };

  //inicialización de servicio
  const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :  firebase.app();

  //Llamar las instancias para la autenticacion, storage y base de datos
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export const uploadImage = (file) => {
    return new Promise( (resolve, eject) => {
        const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`).put(file);

        uploadProcess.on("state_changed"
        , (snapshot) => console.log("la imagen se esta subiendo", snapshot)
        ,eject
        ,() => {
          console.log('enter', file);
            storage.ref('images').child(`${file.name}-${file.lastModified}`).getDownloadURL().then(resolve)
        } )
    });
  }