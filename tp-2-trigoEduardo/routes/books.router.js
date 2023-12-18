const { getAllBooks, createBooks, updateBooks, deleteBook } = require('../controllers/books.controlers')
const { body, validationResult } = require('express-validator') 

const booksRouter = require('express').Router()


booksRouter.get('/', getAllBooks)

booksRouter.post('/',
    body('nombre').notEmpty().withMessage('ingrese un nombre'),
    body('precio').notEmpty().withMessage('ingrese un precio'),
    body('precio').isNumeric().withMessage('ingrese un precio'),
    (req, res, next) => {
        const result = validationResult(req)

        if (!result.isEmpty()) return res.json({ errors: result.array() })

        next()
    }, createBooks)

booksRouter.delete('/:id', deleteBook)

booksRouter.patch('/:id', updateBooks)

module.exports = booksRouter