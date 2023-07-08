import React from 'react'
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const handlerFormulario = (e) => {
      e.preventDefault();

      const nuevoCliente = {nombre, apellido, email};
      console.log(nuevoCliente);

      setNombre("");
      setApellido("");
      setEmail("");

    }

  return (
    <form onSubmit={handlerFormulario}>
      <label htmlFor="">Nombre: </label>
      <input type="text" onChange={(e)=> setNombre(e.target.value)} value={nombre}/>

      <label htmlFor="">Apellido: </label>
      <input type="text" onChange={(e)=> setApellido(e.target.value)} value={apellido} />

      <label htmlFor="">Mail: </label>
      <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>

      <button type='submit'> Enviar datos</button>
    </form>
  )
}

export default Formulario