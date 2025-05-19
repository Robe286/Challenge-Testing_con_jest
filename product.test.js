const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

/*
- addProduct
  - debería agregar un producto.
  - debería incrementar el id en 1 cada vez que se añada un producto.
  - debería lanzar un error si el nombre o el precio no están definidos.
  - debería lanzar un error si el producto ya existe.
*/

describe('addProduct', () => {
    it('should add a product', () => {
        const product = addProduct({name: 'Banana', price: 3});
        expect(product).toEqual({id: 0, name: 'Banana', price: 3});
    })
    it('should increment the id by 1 every time a product is added', () => {
        const productOne = addProduct({name: 'Banana', price: 3});
        const productTwo = addProduct({name: 'Fresa', price: 2});
        expect(productOne.id).toBe(0);
        expect(productTwo.id).toBe(1);
    })
    it('throw an error if name or price are not defined', () => {
        expect(() => addProduct({name:'Banana'})).toThrow('name and price must be defined');
    })
    it('throw an error if product exists already', () => {
        addProduct({name:'Banana', price: 3});
        expect(() => addProduct({name:'Banana', price: 4})).toThrow('this product already exists');
    })
})

beforeEach(() => {
    resetProducts();
});

/*
- removeProduct
  - debería eliminar un producto
  - debería lanzar un error si el producto no existe.
*/

describe('removeProduct', () => {
    it('should remove a product', () => {
        addProduct({name: 'Banana', price: 3});
        const removed = removeProduct({id: 0});
        expect(removed).toEqual({id: 0, name: 'Banana', price: 3});
    })
    it('should throw an error if the product does not exist', () => {
        addProduct({name: 'Banana', price: 3});
        expect(() => removeProduct({id: 1})).toThrow('this product does not exist');

    })
})

beforeEach(() => {
    resetProducts();
});

/*
- getProduct
  - debería devolver un producto por su id.
  - debería lanzar un error si el producto no existe.
*/

describe('getProduct', () => {
    it('should return a product by id', () => {
        addProduct({name: 'Banana', price: 3});
        const returned = getProduct({id: 0});
        expect(returned).toEqual({id: 0, name: 'Banana', price: 3});
    })
    it('should throw an error if the product does not exist', () => {
        addProduct({name: 'Banana', price: 3});
        expect(() => getProduct({id: 1})).toThrow('this product does not exist');
    })
})

beforeEach(() => {
    resetProducts();
});

/*
- updateProduct
- debería actualizar un producto por su id.
- debería lanzar un error si el producto no existe.
*/

describe('updateProduct', () => {
    it('should update a product by id', () => {
        addProduct({name: 'Banana', price: 3});
        const updated = updateProduct({id: 0, name: 'Kiwi', price: 2});
        expect(updated).not.toEqual({id: 0, name: 'Banana', price: 3});
    })
    it('should throw an error if the product does not exist', () => {
        addProduct({name: 'Banana', price: 3});
        expect(() => updateProduct({id: 1, name: 'Manzana', price: 1})).toThrow('this product does not exist');
    })
})
