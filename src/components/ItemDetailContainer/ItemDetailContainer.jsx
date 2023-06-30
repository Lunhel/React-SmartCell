import React from 'react'
import { useState, useEffect } from 'react'
import { getUnProducto } from '../Item/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)

  const {idItem} = useParams()

  useEffect(() => {
    getUnProducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error))
  }, [idItem])

  return (
    <div className='detalle'>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer