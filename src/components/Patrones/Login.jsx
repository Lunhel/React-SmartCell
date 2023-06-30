import { useState } from "react"
import InicioSesion from "./InicioSesion"
import LoginButton from "./LoginButton"



export const Login = () => {
    const [usuario, setUsuario] = useState (null)
    const manejadorLogin = () => {
        setUsuario("Alejandro");
    }

  return (
    <div>
        {
            usuario ? (<InicioSesion nombre={usuario} />) :
             (<LoginButton loguear={manejadorLogin} />)
        }
    </div>
  )
}
