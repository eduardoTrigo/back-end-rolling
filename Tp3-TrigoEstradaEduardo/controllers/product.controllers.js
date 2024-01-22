const { removelogger, logger } = require("../logger")
const Categoria = require("../models/category")
const Productos = require("../models/product")

const getAllProduct = async (req, res, next) => {
    try {
        const productos = await Productos.find({})

        res.json({ data: productos, error:[]})
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
            return res.json({ data: [], error: 'usuario no encontrado' })
        }

        res.json({ data: producto, error: []})
    } catch (err) {
        next(err)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const {catId, nombre, precio, descripcion } = req.body

        const owner = await Categoria.findById(catId)
        if(!owner) return res.status(400).json({ data: [], error: ['no existe esa categoria']})

        const producto = new Productos({ nombre, precio, descripcion })
        await producto.save()

        owner.producto.push(catId)
        await owner.save()

        logger.info(producto)
        res.status(201)
        res.json({data: producto, error: []})
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
            return res.json({ data: [], error: 'usuario no encontrado' })
        }

        producto.nombre = req.body.nombre ?? producto.nombre
        producto.precio = req.body.precio ?? producto.precio
        producto.stock = req.body.stock ?? producto.stock
        producto.descripcion = req.body.descripcion ?? producto.descripcion

        producto.save()
        res.json({ data: producto, error: []})
    } catch (err) {
        next(err)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const producto = await Productos.findByIdAndDelete(id)

        if (!producto) {
            res.status(400)
            return res.json({ data: [], error: 'usuario no encontrado' })
        }

        removelogger.info(producto)
        res.json({ data: producto, error: [] })
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