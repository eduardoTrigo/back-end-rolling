const Author = require("../models/Author")
const Book = require("../models/book")

const createAuthor = async (req, res) => {
    const {firstName, lastName} = req.body
    const author = new Author({firstName, lastName})
    await author.save()

    res.json(author)
}

const createBook = async (req, res) => {
    const { name, description, authorId} = req.body
    const book = new Book({name, description, authorId})
    await book.save()

    res.json(book)
}

 const getBooks = async(req, res)=>{
    const {bookId, withAutorData } = req.query
    
    let query = undefined
    
    if (bookId !== undefined) {
        query = Book.findById(bookId)
    }else{
        query = Book.find({})
    }

    if (withAutorData !== undefined && withAutorData ==="YES"){
        query = query.populate('authorId')
    }

    const response = await query.exec()

    res.json(response)
 }

module.exports = {
    createAuthor,
    createBook,
    getBooks
}