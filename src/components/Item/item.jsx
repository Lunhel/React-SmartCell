import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"


const item = ({id, nombre, precio, img}) => {
  return (
    <div className='card'>
      <img className='cardImg' src={img} alt={nombre} />
      <div className='cardContent'>
      <h2 className='cardTitle'>{nombre} </h2>
      <p className='cardText'>Precio: ${precio} </p>
      <p className='cardText'>ID: {id} </p>
      </div>
      <button className='cardButton'>
      <Link to={`/item/${id}`}> Ver detalles </Link>
      </button>
    </div>
    )
}

export default item