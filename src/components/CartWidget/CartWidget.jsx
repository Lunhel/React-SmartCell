import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/5585/5585388.png";
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
      <strong className='strongCardWidget'> 7 </strong>
    </div>
  );
};

export default CartWidget;
