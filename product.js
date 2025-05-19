

/*
- addProduct
  - debería agregar un producto.
  - debería incrementar el id en 1 cada vez que se añada un producto.
  - debería lanzar un error si el nombre o el precio no están definidos.
  - debería lanzar un error si el producto ya existe.
- removeProduct
  - debería eliminar un producto
  - debería lanzar un error si el producto no existe.
- getProduct
  - debería devolver un producto por su id.
  - debería lanzar un error si el producto no existe.
- updateProduct
  - debería actualizar un producto por su id.
  - debería lanzar un error si el producto no existe.
  
  */
 // recibe dos parámetros: el nombre del producto y el precio.
 // let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
 // ["Fresa" ,"Manzana", "Banana"]
 
 let products = []; // declaramos una variable products vacía
 let id = 0; // declaramos una variable id con valor 0
 
 function resetProducts() {
     products = [];
     id = 0
 }

function addProduct({name, price}) {
    if (!name || !price) {
        throw new Error ('name and price must be defined')
    }
    const exists = products.find(p => p.name === name)
    if (exists) {
        throw new Error('this product already exists')
    }
    const newProduct = {
        id: id++,
        name,
        price,
    }
    products.push(newProduct)
    return newProduct
}

function removeProduct({id}) {
    const index = products.findIndex(p => p.id === id)
    if(index === -1) {
        throw new Error('this product does not exist');
    }
    const removeProduct = products.splice(index, 1)[0];
    return removeProduct;
}


module.exports = {
    addProduct,
    resetProducts,
    removeProduct,
}