const router = require('express').Router()

//.../
router.get('/', (req, res) =>{
    res.json({message: 'list all courses'})
})

//.../
router.post('/create', (req, res) =>{
    res.json({message: 'create course'})
})

//.../
router.get('/:id', (req, res) =>{
    res.json({message: 'Get by id'})
})

module.exports = router