import express, { Router } from "express"
// import { productsRouter } from "./productsRouter.js"
// import { cartsRouter } from "./cartsRouter.js"
// import { fileManager } from "../fileManager.js"
// import { randomUUID } from "crypto"
// import { Persona } from "./routers/Persona.js.js"

export const apiRouter = Router()

apiRouter.get('api/products', (req, res) => { res.json([]); })
apiRouter.post('api/products', (req, res) => { res.json([]); })
apiRouter.put('api/products', (req, res) => { res.json([]); })
apiRouter.delete('api/products', (req, res) => { res.json([]); })

apiRouter.get('api/carts', (req, res) => { res.json([]) })
apiRouter.post('api/carts', (req, res) => { res.json([]) })
apiRouter.put('api/carts', (req, res) => { res.json([]) })
apiRouter.delete('api/carts', (req, res) => { res.json([]) })

// apiRouter.use(express.json())
// apiRouter.use(express.urlencoded({ extended: true }))

// const personasManager = new fileManager("./database/productos.json")

// apiRouter.use((req, res, next) => {
//     console.log('pasa por el api router')
//     next()
// })

// apiRouter.use('/products', productsRouter)
// apiRouter.use('/carts', cartsRouter)

// apiRouter.get('/personas', async (req, res, next) => {
//     try {
//         const personas = await personasManager.buscarCosas()
//         res.json(personas)
//     } catch (error) {
//         next(error)
//     }
// })

// apiRouter.post('/personas', async (req, res, next) => {
//     try {
//         const persona = new Persona({
//             id: randomUUID(),
//             ...req.body
//         })
//         const agregada = await personasManager.guardarCosa(persona)
//         res.json(agregada)
//     } catch (error) {
//         next(error)
//     }
// })