export default class Product {
    constructor({ title, description, code, price, status, stock, category, thumbnails }) {
        if (!title) throw new Error("falta el titulo")
        this.title = title

        if (!description) throw new Error("falta la descripción")
        this.description = description

        if (!code) throw new Error("falta el code")
        this.code = code

        if (!price) throw new Error("falta el precio")
        this.price = price

        this.status = true

        if (!stock) throw new Error("falta el stock")
        this.stock = stock

        if (!category) throw new Error("falta la categoria")
        this.category = category

        if (!thumbnails) throw new Error("falta el thumbnail")
        this.thumbnails = thumbnails
    }
}