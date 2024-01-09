const Author = require('../models/authors')

//listar todos los autores
const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find({})
        res.json(authors)
    } catch (err) {
        next(err)
    }
}

//logica para crear un autor
const createAuthors = async (req, res, next) => {
    try {
        const { nombre, apellido } = req.body

        const authors = new Author({ nombre, apellido })
        await authors.save()

        res.status(201)
        res.json(authors)

    } catch (err) {
        next(err)
    }
}

//logica para listar un autor con el id
const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params
        const authors = await Author.findById(id)

        if (!authors) {
            res.status(404)
            return res.json({ message: 'autor no encontrado' })
        }
        res.json(authors)
    } catch (err) {
        next(err)
    }
}

//logica para reemplazar un dato de un autor
const updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params

        const authors = await Author.findById(id)

        if (!authors) {
            res.status(400)
            return res.json({ message: 'curso no encontrado' })
        }

        authors.nombre = req.body.nombre ?? authors.nombre
        authors.apellido = req.body.apellido ?? authors.apellido
        await authors.save()
        res.json(authors)

    } catch (err) {
        next(err)
    }
}

//logica para eliminar un autor por id
const deleteAuthor = async (req, res, next) => {
    try {

        const { id } = req.params

        const authors = await Author.findByIdAndDelete(id)

        if (!authors) {
            res.status(400)
            return res.json({ message: ' autor inexistente' })
        }

        res.json(authors)
        res.send('eliminado')
    }catch(err){
        next(err)
    }
}


module.exports = {
    getAllAuthors,
    createAuthors,
    updateAuthor,
    deleteAuthor,
    getAuthorById
}
