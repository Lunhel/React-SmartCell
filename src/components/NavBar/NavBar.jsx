import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"


const TituloPrincipal = () => {
  return (
    <header>
      <h1 className="imgLogo"><img src="https://i.postimg.cc/DyZdTxpW/Logo-React.png" alt="Logo" /></h1>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>Nosotros</li>
          <li>Envios</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default TituloPrincipal