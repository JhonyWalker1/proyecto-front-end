import  {initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCmmkNA1zBdiZwj518z37_Zd773ARcMxa4",
    authDomain: "project-code13.firebaseapp.com",
    projectId: "project-code13",
    storageBucket: "project-code13.appspot.com",
    messagingSenderId: "910730057302",
    appId: "1:910730057302:web:8f461988576bb9efe30df7",
    measurementId: "G-KDDN14WNJW"
  };

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getAtractivo = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionRegion = collection(db, "region_atractivo");
  // paso 2: Traer los documentos
  const documentRegion = await getDocs(collectionRegion);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const region = documentRegion.docs.map((doc) => doc.data());
  return region;
};