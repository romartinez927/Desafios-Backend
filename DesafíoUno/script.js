// Clases con ECMAScript y ECMAScript avanzado

// Consigna: Realizar una clase “ProductManager” que gestione un conjunto de productos.

// Aspectos a incluir:
// - Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

// - Cada producto que gestione debe contar con las propiedades:
// 	title (nombre del producto)
// 	description (descripción del producto)
// 	price (precio)
// 	thumbnail (ruta de imagen)
// 	code (código identificador)
// 	stock (número de piezas disponibles)

// - Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// 	Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// 	Al agregarlo, debe crearse con un id autoincrementable

// - Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

// - Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// 	En caso de no coincidir ningún id, mostrar en consola un error “Not found”


class ProductManager {
	constructor() {
		this.products = []
		this.id = 0
	}

	getProducts() {
		console.log(this.products)
		return this.products
	}

	addProduct(prod) {
		const codeExists = this.products.some((product) => prod.code === product.code)

		if (!codeExists) {
			this.id++
			prod.id = this.id
			if(prod.title && prod.description && prod.price && prod.thumbnail && prod.code && prod.stock){
				this.products.push(prod)
				return prod.id
			} else {
				console.log("Por favor, completar todos los campos")
			}
		} else {
			console.log("Ingresar otro code")
		}
	}

	getProductById(id) {
		const product = this.products.find((product) => id === product.id)
		if(product) {
			console.log(product)
			return product
		}
		console.log(`Producto no encontrado`)
	}
}

const test = new ProductManager()

test.getProducts()

test.addProduct({
	title: 'producto prueba',
	description: 'Este es un producto prueba',
	price: 200,
	thumbnail: 'Sin imagen',
	code: 'abc123',
	stock: 25,
  });

test.addProduct({
	title: 'producto prueba2',
	description: 'Este es un producto prueba2',
	price: 200,
	thumbnail: 'Sin imagen',
	code: 'abc123',
	stock: 25,
  });

test.addProduct({
	title: 'producto prueba 3',
	description: 'Este es un producto prueba 3',
	thumbnail: 'Sin imagen',
	code: 'abc12345',
	stock: 25,
  });

test.getProducts()
test.getProductById(3)


