import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"



const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad)
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
  <div className='detalleCard'>
    <h2>{nombre}</h2>
    <img className='detalleImg' src={img} alt={nombre}/>
    <p className='detalleText'>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
     iusto illum odit omnis error dolorem ducimus maxime voluptates
     voluptate sequi fuga nam deserunt beatae officia officiis culpa
     porro aspernatur! Consequatur fugit ea amet voluptatem sunt
     laudantium veritatis doloribus porro dolorum.
    </p>
    <h3 className='detalleH3'>ID Producto: {id}</h3>
    <h3 className='detalleH3'>Precio: $ {precio}</h3>
    {
      agregarCantidad > 0 ? (<Link to="cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
    }gi
  </div>
  
  )
}

export default ItemDetail