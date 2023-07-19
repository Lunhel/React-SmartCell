import React from 'react'
import { useState, useEffect } from 'react'

//Importamos las funciones de Firebase que necesitamos para importar los productos:

//getDocs obtengo documentos de una coleccion.
//collection, obtiene una coleccion.
//query, la uso cuando quiero consultar a la base de datos.

import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        const misProductos = query(collection(db, "inventario"))
        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })

    }, [])
  return (
    <div> 
            <h2>Productos</h2>
             <div className='productos-container'>
    	        {
                    productos.map(producto => (
                        <div className='producto-card' key={producto.id}>
                            <h2> {producto.nombre} </h2>
                            <p> Precio: $ {producto.precio} </p>
                            <p> Stock: { producto.stock} </p>
                            <button> Comprar </button>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Productos