const taskRouter = require('./tasks.router')
const userRouter = require('./users.router')

const rootRouter = require('express').Router()

rootRouter.use('./tasks' , taskRouter)
rootRouter.use('./users' , userRouter)

module.exports = rootRouter