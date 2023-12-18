const Author = require('../models/authors')

const getAllAuthors = async (req, res) => {
    try{

        const authors = await Author.find({})
        res.json(authors)
    }catch(err){
        console.log('getAllAuthors', err)
        res.status(500)
        res.json({message:'error interno'})
    }
}

const createAuthors = async (req, res) => {
    try {
        const { nombre, apellido } = req.body

        const authors = new Author({ nombre, apellido })
        await authors.save()

        res.status(201)
        res.json(authors)

    } catch(err){
        next(err)
    }
}

const deleteAuthor = async (req, res) => {
    const { id } = req.params

    const authors = Author.filter(author => author.id === +id)
    res.send('eliminado')
}

const updateAuthor = async (req, res) => {
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
}

module.exports = {
    getAllAuthors,
    createAuthors,
    updateAuthor,
    deleteAuthor
}
