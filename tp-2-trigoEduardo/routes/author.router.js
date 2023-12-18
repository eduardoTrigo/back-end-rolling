const authorRouter = require('express').Router()
const { body, validationResult } = require('express-validator')
const { getAllAuthors, createAuthors, updateAuthor, deleteAuthor } = require('../controllers/authors.controllers')
const { errorMiddleware, requestValidation } = require('../middlewares/common.middleware')


authorRouter.get('/', getAllAuthors,errorMiddleware)

authorRouter.post('/',
   body('nombre').notEmpty().withMessage('ingrese un nombre'),
   body('nombre').isString().withMessage('ingrese un nombre'),
   body('apellido').notEmpty().withMessage('ingrese un apellido'),
   requestValidation,
   createAuthors,
   errorMiddleware
)

authorRouter.delete('/:id', deleteAuthor)

authorRouter.patch('/:id', updateAuthor)


module.exports = authorRouter