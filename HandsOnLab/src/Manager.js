import fs from "fs/promises"

export class Manager {
    #path
    #file

    constructor(path){
        this.#path = path
        this.#file = []
    }

    async #leer() {
        const json = await fs.readFile(this.#path, 'utf-8')
        this.#file = JSON.parse(json)
    }

    async #escribir() {
        const nuevoJson = JSON.stringify(this.#file, null, 2)
        await fs.writeFile(this.#path, nuevoJson)
    }

    async guardar(file) {
        await this.#leer()
        this.#file.push(file)
        await this.#escribir()
        return file
    }

    async buscar() {
        await this.#leer()
        return this.#file
    }
}