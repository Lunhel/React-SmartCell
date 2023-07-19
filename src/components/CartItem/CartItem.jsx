import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ id, nombre, precio, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div key={id}>
      <h3>{nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {precio}</p>
      <button onClick={() => eliminarProducto(id)}>Eliminar</button>
      <hr />
    </div>
  );
};

export default CartItem;