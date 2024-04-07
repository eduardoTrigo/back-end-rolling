const db = require('../models')

const tableRouter = require('express').Router()

tableRouter.get('/', async(req, res)=>{

    const table = await db.Tables.findAll({})

    res.json(table)
})

tableRouter.post('/', async(req, res)=>{
    const {quantity, place} = req.body

    const table = db.Tables.build({quantity, place})
    await table.save()

    res.json(table)
})

module.exports = tableRouter