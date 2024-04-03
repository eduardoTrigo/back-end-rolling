const db = require('../models')

const userRouter = require('express').Router()

userRouter.get('/', async(req, res) => {
    const users = await db.Users.findAll()

    res.json({data: users})
})

userRouter.post('/', async(req, res) => {
    const { firstname, lastname, password, dni, age, email } = req.body

    const user = db.Users.build({ firstname, lastname, password, dni, age, email })
    await user.save()

    res.json({data: user})
})

module.exports = userRouter