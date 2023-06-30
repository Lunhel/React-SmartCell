import { useState, useEffect } from "react"
//import "./JSONPlace.css"

const JSONPlace = () => {
    const [usuarios, setUsuarios] = useState ([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(datos=>setUsuarios(datos))
            .catch(error => console.log("No cargaron los datos", error))
    }, [])
  return (
    <div className="users">
        <h2 className="title">Usuarios: JSONPlaceHolder</h2>
        <ul className="lista">        
            {
                usuarios.map(usuarios => {
                    return (
                        <li key={usuarios.id}> {usuarios.name} - {usuarios.email} </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JSONPlace