const { removelogger } = require("../logger")
const Productos = require("../models/product")

const getAllProduct = async (req, res, next) => {
    try {
        const productos = await Productos.find({})

        res.json(productos)
    } catch (err) {
        next(err)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const producto = await Productos.findById(id)

        if (!producto) {
            res.status(404)
            // logger.error({ message: 'no existe el producto' })
            return res.json({ message: 'no existe producto' })
        }

        res.json(producto)
    } catch (err) {
        next(err)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const { nombre, precio, descripcion } = req.body
        const producto = new Productos({ nombre, precio, descripcion })

        await producto.save()

        res.status(201)
        res.json(producto)
    } catch (err) {
        next(err)
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const producto = await Productos.findById(id)

        if (!producto) {
            res.status(400)
            return res.json({ message: 'no existe producto' })
        }

        producto.nombre = req.body.nombre ?? producto.nombre
        producto.precio = req.body.precio ?? producto.precio
        producto.stock = req.body.stock ?? producto.stock
        producto.descripcion = req.body.descripcion ?? producto.descripcion

        producto.save()
        res.json(producto)
    } catch (err) {
        next(err)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const producto = await Productos.findByIdAndDelete(id)

        if (!producto) {
            res.status(404)
            return res.json({ message: 'no existe producto' })
        }

        removelogger.info(producto)
        res.json(producto)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}