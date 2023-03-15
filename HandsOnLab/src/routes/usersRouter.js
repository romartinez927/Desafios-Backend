import { Router } from "express"
import { Manager } from "../Manager.js"

export const usersRouter = Router()

const usersManager = new Manager("./database/users.json")

usersRouter.get("/", async (req,res) => {
    const users = await usersManager.buscar()
    res.json(users)
})

usersRouter.post("/", async (req,res) => {
    const user = req.body
    const agregado = usersManager.guardar(user)
    res.json(agregado)
})