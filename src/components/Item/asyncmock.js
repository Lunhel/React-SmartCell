const productos = [
  {
    nombre: "Samsung Galaxy Z Flip4",
    precio: 565999,
    id: "1",
    img: "/images/SamsungGalaxyZFlip4.jpg",
    idCat: "1",
  },
  {
    nombre: "Samsung Galaxy S23 Ultra",
    precio: 470000,
    id: "2",
    img: "/images/SamsungS23Ultra.jpg",
    idCat: "1",
  },
  {
    nombre: "Samsung Galaxy S22",
    precio: 385500,
    id: "3",
    img: "/images/SamsungGalaxyS22.jpg",
    idCat: "1",
  },
  {
    nombre: "Samsung Galaxy A24",
    precio: 195200,
    id: "4",
    img: "/images/SamsungGalaxyA24.jpg",
    idCat: "1",
  },
  { 
    nombre: "Motorola Edge 30 Fusion",
    precio: 433900, 
    id: "5", img: 
    "/images/MotorolaEdge30Fusion.png", 
    idCat: "2"
  },
  { 
    nombre: "Motorola Moto E22", 
    precio: 271000, 
    id: "6", 
    img: "/images/MotorolaMotoE22.png", 
    idCat: "2" },
  { 
    nombre: "Motorola Moto G13", 
    precio: 156400, 
    id: "7", 
    img: "/images/MotorolaMotoG13.png", 
    idCat: "2" 
  },
  { 
    nombre: "Motorola Moto G72", 
    precio: 300000, 
    id: "8", 
    img: "/images/MotorolaMotoG72.png", 
    idCat: "2" 
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000)
  })
}

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id)
      resolve(producto)
    }, 2000)
  })
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ProductosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(ProductosCategoria);
    }, 2000)
  })
}
