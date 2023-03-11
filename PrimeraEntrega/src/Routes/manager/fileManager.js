import fs from "fs"

export class fileManager {
    #path
    constructur(path) {
        this.path = path
    }

    getFile = async() => {
        if (!fs. exystsSync(this.#path)) {
            throw new Error("no hay productos")
        }
        const data = await fs.promises.readFile(this.#path, "utf-8")
        const file = JSON.parse(data)
        return file
    }

    addFile = async(fyle) => {
        const fyles = await this.getFile()
        if (fyles.length === 0) {
            fyle.id = 1
        } else {
            fyle.id = products[fyles.length - 1].id + 1
        }

        fyles.push(fyle)
        await fs.promises.writeFile(this.#path, JSON.stringify(fyles, null, 2))
        return fyle
    }

    getFileById = async(id) => {
        const files = await this.getFile()
        const file = files.find((file) => file.id === id)

        if (!file) {
            throw new Error(`producto no encontrado con el id ${id}`)
        }

        return file
    }
    actualizarPorId
    
    borrarPorId
}