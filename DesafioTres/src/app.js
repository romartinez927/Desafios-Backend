import express from "express"
import { ProductManager } from "./ProductManager.js"

const app = express()
const test = new ProductManager("./database/products.json")
            
const productos = await test.getProducts()

app.use(express.urlencoded({extended:true}))

app.get("/products", (req, res) => {
    let limit = req.query.limit
    if(!limit) return res.send({productos})
    let productosFiltrados = productos.filter(producto => producto.id <= limit)
    res.send({productos:productosFiltrados})
})

app.get("/products/:id", (req, res) => {
    let id = req.params.id
    let productById = productos.find(producto => producto.id == id)
    if (!productById) return res.send({error:"Usuario no encontrado"})                        
    res.send({productos:productById})
})

const server = app.listen(8080)
