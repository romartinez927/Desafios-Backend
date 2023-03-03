import fs from "fs"

export class ProductManager {
    #path
    constructor(path) {
        this.#path = path
    }

    getProducts = async() => {
        if (!fs.existsSync(this.#path)) {
            throw new Error("no hay productos")
        }
        const data = await fs.promises.readFile(this.#path, 'utf-8');
        const products = JSON.parse(data);
        return products;
    }

    addProduct = async (producto) => {
        const products = await this.getProducts()
        if (products.length === 0) {
            producto.id = 1
        } else {
            producto.id = products[products.length - 1].id + 1
        }
        products.push(producto)
        await fs.promises.writeFile(this.#path, JSON.stringify(products, null, 2))
        return producto
    }

    getProductsById = async (id) => {
        const products = await this.getProducts()
        const product = products.find((prod) => prod.id === id )

        if (!product) {
            throw new Error(`Producto no encontrado con el id ${id}`) 
        } 
        return product
    }
}
