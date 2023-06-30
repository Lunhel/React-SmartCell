import { useContador } from "./useContador"
import { useFetch } from "./useFetch"
import "./CustomHooks.css"

const CustomsHooks = () => {
    const {contador, aumentarContador, decrementarContador} = useContador(1, 10)
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="contador">
        <h2 className="tituloContador">CustomHooks: Contador</h2>
        <button className="botonSubir" onClick={aumentarContador}>Sumar</button>
        <strong className="strongCustomHooks"> {contador} </strong>
        <button className="botonBajar" onClick={decrementarContador}>Restar</button>


      <h3>Fetch de datos: </h3>
      {data && data.map((usuario)=> <p key={usuario.id}> {usuario.name} {usuario.website} {usuario.email} {usuario.phone} </p>) } 


      

    </div>
  )
}

export default CustomsHooks