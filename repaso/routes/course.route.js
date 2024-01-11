const router = require('express').Router()
const { getAllCourses, createCourses, courseFindById, updateCourse, deleteCourse } = require('../controllers/course.controller')
const { body } = require('express-validator') 
const Course = require('../models/courses')
const { requestValidation, errorMiddleware } = require('../middleware/common.middleware')

router.get('/', getAllCourses)

router.post('/',
body('nombre').notEmpty().withMessage('nombre es requerido'),
body('nombre').isString().withMessage('nombre debe ser un string'),
body('precio').notEmpty().withMessage('precio es requerido'),
body('precio').isNumeric().withMessage('precio debe ser numerico'),
requestValidation,
createCourses,
errorMiddleware
)

router.get('/:id', courseFindById)

router.patch('/:id', updateCourse)

router.delete('/:id', deleteCourse)

module.exports = router