import express from "express"
import {apiRouter} from "./Routes/apiRouter.js"

const app = express()

app.use('/api', apiRouter)

app.listen(8080)

