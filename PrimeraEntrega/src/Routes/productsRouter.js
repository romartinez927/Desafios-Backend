import { Router } from "express"
import { fileManager } from "./manager/fileManager"

export const productsRouter = Router()
const test = new fileManager("./../../database/productos.json")

const productos = await test.getFile()

productsRouter.get("/", (req, res) => {
    let limit = req.query.limit
    if(!limit) return res.send({ productos })
    let productosFiltrados = productos.filter(producto => producto.id <= limit)
    res.send({ productos:productosFiltrados })
})



