import express from "express"
import { apiRouter } from "./routes/apiRouter.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRouter)

app.use("/static", express.static("public"))

const PORT = 8080
const server = app.listen(PORT, () => {console.log(`escuchando en ${PORT}`)})