const Books = require('../models/books')

//logica para listar todos los libros
const getAllBooks = async (req, res, next) => {
    try{
        const books = await Books.find({})
        res.json(books)
    }catch(err){
        next(err)
    }
}

//logica para buscar y traer un libro por id
const getBooksById = async (req, res, next) => {
    try{
        const {id} = req.params

        const books = await Books.findById(id)
        if (!books) {
            res.status(404)
            return res.json({message: 'libro inexistente'})
        }

        res.json(books)

    }catch(err){
        next(err)
    }
}

//logica para crear un libro
const createBooks = async (req, res, next) => {
    try{
        const { nombre, precio, paginas, descripcion } = req.body
    
        const book = new Books({ nombre, precio, paginas, descripcion })
        await book.save()
    
        res.status(201)
        res.json(book)
    }catch(err){
        next(err)
    }
}

//logica para actualizar(patch) datos por id
const updateBooks = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const books = await Books.findById(id)
        
        if (!books) {
            res.status(400)
            return res.json({ message: 'book no encontrado' })
        }
        
        books.nombre = req.body.nombre ?? books.nombre
        books.precio = req.body.precio ?? books.precio
        books.paginas = req.body.paginas ?? books.paginas
        books.descripcion = req.body.descripcion ?? books.descripcion
        await books.save()
        res.json(books)

    } catch (err) {
        next(err)
    }
}

//logica para eliminar un libro por id
const deleteBook = async (req, res, next) => {
    try{
        const { id } = req.params
        const book = await Books.findByIdAndDelete(id)

        if (!book) {
            res.status(404)
            return res.json({message: 'libro inexistente'})
        }

        res.json(book)

    }catch(err){
        next(err)
    }
}

module.exports = {
    getAllBooks,
    getBooksById,
    createBooks,
    updateBooks,
    deleteBook
}