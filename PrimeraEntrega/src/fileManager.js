// import fs from "fs/promises"

// export class fileManager {
//     #path
//     #cosas
    
//     constructur(path) {
//         this.#path = path
//         this.#cosas = []
//     }

//     async #leer() {
//         const json = await fs.readFile(this.#path, "utf-8")
//         this.#cosas = JSON.parse(json)
//     }

//     async #escribir() {
//         const nuevoJson = JSON.stringify(this.#cosas, null, 2)
//         await fs.writeFile(this.#path, nuevoJson)
//     }

//     async guardarCosa(cosa) {
//         await this.#leer()
//         this.#cosas.push(cosa)
//         await this.#escribir()
//         return cosa
//     }

//     async buscarCosas() {
//         await this.#leer()
//         return this.#cosas
//     }

    // getFile = async() => {
    //     if (!fs.existsSync(this.#path)) {
    //         console.log("no hay productos")
    //     }
    //     const data = await fs.promises.readFile(this.#path, "utf-8")
    //     const file = JSON.parse(data)
    //     return file
    // }

    // addFile = async(fyle) => {
    //     const fyles = await this.getFile()
    //     if (fyles.length === 0) {
    //         fyle.id = 1
    //     } else {
    //         fyle.id = products[fyles.length - 1].id + 1
    //     }

    //     fyles.push(fyle)
    //     await fs.promises.writeFile(this.#path, JSON.stringify(fyles, null, 2))
    //     return fyle
    // }

    // getFileById = async(id) => {
    //     const files = await this.getFile()
    //     const file = files.find((file) => file.id === id)

    //     if (!file) {
    //         throw new Error(`producto no encontrado con el id ${id}`)
    //     }

    //     return file
    // }
    // actualizarPorId

    // borrarPorId
//}