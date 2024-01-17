const Categoria = require("../models/category")

const getAllCategory = async (req, res, next) => {
    try {
        const categorias = await Categoria.find()

        res.json(categorias)
    } catch (err) {
        next(err)
    }
}

const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params
        const categoria = await Categoria.findById(id)

        if (!categoria) {
            res.status(404)
            return res.json({ message: ' no existe la categoria' })
        }

        res.json(categoria)
    } catch (err) {
        next(err)
    }
}

const createCategory = async (req, res, next) => {
    try {
        const { nombre, descripcion } = req.body
        const categoria = new Categoria({ nombre, descripcion })

        await categoria.save()

        res.status(201)
        res.json(categoria)
    } catch (err) {
        next(err)
    }
}

const updateCategory = async (req, res, next) => {
    try{
        const {id} = req.params
        const categoria = await Categoria.findById(id)

        if (!categoria) {
            res.status(400)
            return res.json({ message: 'no existe la categoria'})
        }

        categoria.nombre = req.body.nombre ?? categoria.nombre
        categoria.descripcion = req.body.descripcion ?? categoria.descripcion

        categoria.save()
        res.json(categoria)
    }catch(err){
        next(err)
    }
}

const deleteCategory = async(req, res, next) => {
    try {
        const {id} = req.params
        const categoria = await Categoria.findByIdAndDelete(id)

        if (!categoria) {
            res.status(400)
            res.json({message: 'no existe la categoria'})
        }

        res.json(categoria)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}