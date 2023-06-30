const productos = [
    { nombre: "Galaxy Z Flip4", precio: 565999, id: "1", img: "./images/SamsungGalaxyZFlip4.jpg", idCat: "2"},
    { nombre: "Galaxy S23 Ultra", precio: 470000, id: "2", img: "./images/SamsungS23Ultra.jpg", idCat: "2" },
    { nombre: "Galaxy S22", precio: 385500, id: "3", img: "./images/SamsungGalaxyS22.jpg", idCat: "3" },
    { nombre: "Galaxy A24", precio: 195200, id: "4", img: "./images/SamsungGalaxyA24.jpg", idCat: "3" },

]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const ProductosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(ProductosCategoria);
        }, 2000)
    })
}