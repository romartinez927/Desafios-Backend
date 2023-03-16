import express from "express"

const router = express.Router()


const Users = [
    {name: "Pablo", apellido: "gomez", anios: 20, correo: "aa@yahoo.com", telefono: 1234576, role: "admin"},
    {name: "Pepito", apellido: "gomez", anios: 21, correo: "aa@yahoo.com", telefono: 1234576, role: "admin"},
    {name: "Juancito", apellido: "gomez", anios: 22, correo: "aa@yahoo.com", telefono: 1234576, role: "user"},
    {name: "Pedrito", apellido: "gomez", anios: 23, correo: "aa@yahoo.com", telefono: 1234576, role: "user"},
    {name: "Panchito", apellido: "gomez", anios: 24, correo: "aa@yahoo.com", telefono: 1234576, role: "user"}
]

const food = [
    {name: "pera", price: 10},
    {name: "manzana", price: 15},
    {name: "sandia", price: 20},
    {name: "banana", price: 13},
    {name: "melon", price: 19}
]

router.get("/", (req,res) => {
    const random = Math.floor(Math.random() * 4);
    let testUser = Users[random]
    res.render("index", {
        user: testUser,
        isAdmin:testUser.role==="admin",
        food
    })
})


export default router