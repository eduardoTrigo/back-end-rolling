const authorRouter = require('express').Router()
const { body, validationResult, param } = require('express-validator')
const { getAllAuthors, createAuthors, updateAuthor, deleteAuthor, getAuthorById } = require('../controllers/authors.controllers')
const { errorMiddleware, requestValidation } = require('../middlewares/common.middleware')

//enrutador para listar todos los autores
authorRouter.get('/',
   getAllAuthors,
   errorMiddleware
)

//ruta para listar un autor por id
authorRouter.get('/:id',
   param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
   requestValidation,
   getAuthorById,
   errorMiddleware
)

//enrutamiento para la creacion de un autor
authorRouter.post('/',
   body('nombre').notEmpty().withMessage('ingrese un nombre'),
   body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
   body('apellido').notEmpty().withMessage('ingrese un apellido'),
   body('apellido').isString().withMessage('el apellido debe ser alfabetico'),
   requestValidation,
   createAuthors,
   errorMiddleware
)

//ruta para actualizar autor por id
authorRouter.patch('/:id',
   param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
   requestValidation,
   updateAuthor,
   errorMiddleware
)

//ruta para eliminar autor por id
authorRouter.delete('/:id',
   param('id').isMongoId().withMessage('el id deberia ser formato mongo'),
   requestValidation,
   deleteAuthor,
   errorMiddleware
)

module.exports = authorRouter