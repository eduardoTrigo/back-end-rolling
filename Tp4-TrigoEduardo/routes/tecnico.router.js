const { createCoach, getCoach } = require('../controllers/tecnico.controllers')
const { validationCoachData, validationCoachMongoId } = require('../middlewares/coach.middleware')
const { errorMiddleware } = require('../middlewares/commonMiddleware')

const tecnicoRouter = require('express').Router()

tecnicoRouter.post('/create-coach',
    validationCoachData,
    createCoach,
    errorMiddleware
)

tecnicoRouter.get('/get-coach',
    validationCoachMongoId,
    getCoach,
    errorMiddleware
)

module.exports = tecnicoRouter