import express, { Router } from "express"
import { petsRouter } from "./petsRouter.js"
import { usersRouter } from "./usersRouter.js"

export const apiRouter = Router()

apiRouter.use("/pets", petsRouter)
apiRouter.use("/users", usersRouter)

