import { Router } from "express"
import { Manager } from "../Manager.js"

export const petsRouter = Router()

const petsManager = new Manager("./database/pets.json")

petsRouter.get("/", async (req, res) => {
    const pets = await petsManager.buscar()
    res.json(pets)
})

petsRouter.post("/")