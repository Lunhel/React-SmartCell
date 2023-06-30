export const mensajeConTitulo = (Mensaje) => {
    return function () {
        return (
            <>
                <h2>Hola Mundo!</h2>
                <Mensaje/>
            </>
        )
    }
}

export const conAumento = (Producto) => {
    return function({nombre, precio}) {
        let nuevoPrecio = precio + 500;
        return <Producto nombre={nombre} precio={nuevoPrecio}/>
    }
}