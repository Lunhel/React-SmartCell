import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = (item, Cantidad) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4> {item.nombre} </h4>
      <p> Cantidad: {Cantidad} </p>
      <p> Precio: {item.precio} </p>
      <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  );
};

export default CartItem;
