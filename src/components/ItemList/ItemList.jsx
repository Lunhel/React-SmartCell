import React from "react";
import Item from "../Item/item";

const ItemList = ({ productos }) => {
  console.log(productos);

  return (
    <div className="contenedorProductos">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
