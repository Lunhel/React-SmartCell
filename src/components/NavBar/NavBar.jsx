import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"


const Navbar = () => {
  return (
    <header>
    <Link to={"/"}>
     <h1 className="imgLogo">
      <img src="https://i.postimg.cc/DyZdTxpW/Logo-React.png" alt="Logo" />
      </h1>
    </Link>
      
      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/1`}> Samsung </NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/2`}> Motorola </NavLink>
          </li>
          <li>Contacto</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default Navbar