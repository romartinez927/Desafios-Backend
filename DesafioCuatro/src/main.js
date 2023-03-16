import express from "express"
import { engine } from "express-handlebars"
import { PORT } from "./config.js"
import router from "./routes/views.router.js"
import { Server } from "socket.io"

const app = express()

const httpServer = app.listen(PORT, console.log(`escuchando en port ${PORT}`))

const socketServer = new Server(httpServer)

app.use("./static", express.static("./static"))

app.engine("handlebars", engine())
app.set("views", "./views")

app.set("view engine", "handlebars")

app.use("/", router)

