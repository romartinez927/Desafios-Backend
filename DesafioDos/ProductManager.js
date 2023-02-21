// DESAFÍO 2

import fs from "fs"

export default class ProductManager {
    constructor(path = "./products.json") {
        this.path = path
    }

    getProducts = async() => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            console.log(data);
            const products = JSON.parse(data);
            return products;
        }
        else{
            console.log("no hay productos")
            return [] 
        }
    }

    addProduct = async (producto) => {
        const products = await this.getProducts()
        if (products.length === 0) {
            producto.id = 1
        } else {
            producto.id = products[products.length - 1].id + 1
        }
        products.push(producto)
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2))
        return producto
    }

    getProductsById = async (id) => {
        const products = await this.getProducts()
        const product = products.find((prod) => prod.id === id )

        if (product) {
            console.log(product)
            return product
        } else {
            console.log(`Producto no encontrado con el id ${id}`) }
            
    }

    updateProduct = async (id, updatedProduct) => {
        const products = await this.getProducts()
        const product = products.find((prod) => prod.id === id)
        const {title, price, description, thumbnail, code, stock} = updatedProduct

        if (product) {
            product.title = title
            product.description = description
            product.thumbnail = thumbnail
            product.price = price
            product.code = code
            product.stock = stock
            product.id = id
        } else {
            console.log(`Producto no encontrado con el id ${id}`) }

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2))
    }

    deleteProduct = async (id) => {
        let products = await this.getProducts()
        const productoAEliminar = products.find((prod) => prod.id === id)

        if (productoAEliminar) {
            const newProducts = products.filter((prod) => prod !== productoAEliminar)
            products = newProducts
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2))
            return newProducts
        } else {
            console.log(`Producto no encontrado con el id ${id}`) }
        
    }
}

const test = new ProductManager()

// await test.addProduct({
// 	title: 'producto prueba',
// 	description: 'Este es un producto prueba',
// 	price: 200,
// 	thumbnail: 'Sin imagen',
// 	code: 'abc123',
// 	stock: 25,
//   });

// await test.addProduct({
//     title: 'producto prueba 2',
//     description: 'Este es un producto prueba 2',
//     price: 200,
//     thumbnail: 'Sin imagen',
//     code: 'abc123',
//     stock: 25,
// });

// await test.addProduct({
//     title: 'producto prueba 3',
//     description: 'Este es un producto prueba 3',
//     price: 200,
//     thumbnail: 'Sin imagen',
//     code: 'abc123',
//     stock: 25,
// });

// await test.getProductsById(2)
// await test.deleteProduct(3)

// let updatedProduct = {title: 'producto prueba1233',
//     description: 'Este es un producto pruebaaaaa',
//     code: 'abc123',
//     stock: 25,}

// await test.updateProduct(2, updatedProduct)