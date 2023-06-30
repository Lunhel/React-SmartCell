import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import JSONPlace from './components/JSONPlace/JSONPlace';
//import CustomsHooks from './components/CustomsHooks/CustomsHooks';
//import { Mensaje } from './components/Patrones/Mensaje';
//import { mensajeConTitulo } from './components/Patrones/hoc';
//import { conAumento } from './components/Patrones/hoc';
//import Producto from './components/Patrones/Producto';
//import { Login } from './components/Patrones/Login';

function App() {
  //const NuevoComponente = mensajeConTitulo (Mensaje)
  //const NuevoProducto = conAumento (Producto)
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/" element={<ItemListContainer />}
          />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route 
            path="/item/:idItem"
          element={<ItemDetailContainer />} 
          />
        </Routes>
      </BrowserRouter>

      {/*
      <ItemListContainer saludo={"Bienvenidos a SmartCel!"}/>
      <ItemDetailContainer/>
      <NuevoComponente/>
      <NuevoProducto nombre={"Tomate"} precio={100}/>
      <Login/>
      <CustomsHooks/>
      <JSONPlace/>
      */}
    </div>
  );
}

export default App;
