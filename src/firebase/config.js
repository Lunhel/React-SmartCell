import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Vamos a importar dos funciones de la libreria firebase.

//initializrApp = esta funcion la utilizo para INICIAR LA CONEXION CON FIREBASE
//getFirestore = se utiliza para obtener un instancia de firestore.

// Aca estamos trabajando con un objeto que tiene nuestra info de la cuenta.
//Aca se encuentra la key personal de acceso a la base de datos.

const firebaseConfig = {
  apiKey: "AIzaSyBhtKirKsn2CVO8H_a38DMdvAnrAuvVSgY",
  authDomain: "smart-cell-30eb0.firebaseapp.com",
  projectId: "smart-cell-30eb0",
  storageBucket: "smart-cell-30eb0.appspot.com",
  messagingSenderId: "339236061642",
  appId: "1:339236061642:web:3642fd590e5114471ccf33"
};

// Inicializamos Firebase y se pasa la configuracion como argumento.
//Esto me devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Exportamos esta referencia para que este disponible en toda nuestra app.
