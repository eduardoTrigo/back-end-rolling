const { createCoach, getCoach } = require('../controllers/tecnico.controllers')

const tecnicoRouter = require('express').Router()

tecnicoRouter.post('/create-coach', createCoach)
tecnicoRouter.get('/get-coach', getCoach)

module.exports = tecnicoRouter