const Books = require('../models/books')

const getAllBooks =  async(req, res)=>{
    const books = await Books.find({})
    res.json(books)
}

const createBooks = async(req, res)=>{
    const{nombre, precio, paginas, descripcion} = req.body

    const book = new Books({nombre, precio, paginas, descripcion})
    await book.save()

    res.status(201)
    res.json(book)
}

const updateBooks = async (req, res)=>{
    const {id}= req.params

    const books = await Books.findById(id)

    if (!books) {
       res.status(400)
       return res.json({message:'book no encontrado'}) 
    }

    books.nombre = req.body.nombre ?? books.nombre
    books.precio = req.body.precio ?? books.precio
    books.paginas = req.body.paginas ?? books.paginas
    books.descripcion = req.body.descripcion ?? books.descripcion
    await books.save()
    res.json(books)
}

const deleteBook = async(req, res)=>{
    const{id} = req.params

    const book = Books.filter(book=> book.id !== +id)
    res.send('eliminado')
}

module.exports = {
    getAllBooks,
    createBooks,
    updateBooks,
    deleteBook
}