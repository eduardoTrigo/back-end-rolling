const { getAllBooks, createBooks, updateBooks, deleteBook, getBooksById } = require('../controllers/books.controlers')
const { param, body, validationResult } = require('express-validator')
const { requestValidation, errorMiddleware } = require('../middlewares/common.middleware')

const booksRouter = require('express').Router()

//ruta para listar todos los libros
booksRouter.get('/',
    getAllBooks,
    errorMiddleware
)

//enrutador para buscar un libro por id
booksRouter.get('/:id',
    param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
    requestValidation,
    getBooksById,
    errorMiddleware
)

//ruta para crear un libro
booksRouter.post('/',
    body('nombre').notEmpty().withMessage('ingrese un nombre'),
    body('nombre').isString().withMessage('el nombre debe ser tipo alfabetico'),
    body('precio').notEmpty().withMessage('ingrese un precio'),
    body('precio').isNumeric().withMessage('el precio debe ser tipo numerico'),
    requestValidation,
    createBooks,
    errorMiddleware
)

//ruta para eliminar un libro por id
booksRouter.delete('/:id',
    param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
    requestValidation,
    deleteBook,
    errorMiddleware
)

//enrutador para modificar datos de un libro por id
booksRouter.patch('/:id',
    param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
    requestValidation,
    updateBooks,
    errorMiddleware
)

module.exports = booksRouter