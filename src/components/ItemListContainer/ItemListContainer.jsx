import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../Item/asyncmock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  const getProducts = async (categoryID) =>
    categoryID
      ? await getProductosPorCategoria(categoryID)
      : await getProductos();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts(idCategoria);
        if (products) setProductos(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [idCategoria]);

  return (
    <div>
      <h2 className="tituloPagina"> SmartCel </h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
