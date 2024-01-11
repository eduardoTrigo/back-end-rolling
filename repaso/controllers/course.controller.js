const Course = require('../models/courses')

const getAllCourses = async(req, res)=>{
    const courses = await Course.find({})
    res.json(courses)
}

const createCourses = async(req, res, next)=>{
    try{
        const { nombre , precio, descripcion} = req.body
    
        const course = new Course({nombre, precio, descripcion})
        await course.save()
    
        res.status(201)
        res.json(course)
    }catch(err){
        next(err)
    }
}

const courseFindById = async(req, res)=>{
    const {id} = req.params

    const course = Course.findById(id)

    if(!course){
        res.status(404)
        return res.json({message:'el curso no existe'}) 
    }

    res.json(course)
}

const updateCourse = async(req, res)=>{
    const {id} = req.params

    const course = await Course.findById(id)

    if(!course){
        res.status(404)
        res.json({ message: 'el curso no existe'})
    }

    course.nombre = req.body.nombre ?? course.nombre
    course.precio = req.body.precio ?? course.precio
    course.descripcion = req.body.descripcion ?? course.descripcion
}

const deleteCourse = async(req, res, next) => {
    try{
        const {id} = req.params
    
        const course = await Course.findByIdAndDelete(id)
    
        if(!course){
            res.status(404)
            res.json({ message: 'el curso no existe'})
        }
    
        res.json(course)
    }catch(err){
        next(err)
    }
}

module.exports = {
    getAllCourses,
    createCourses,
    courseFindById,
    updateCourse,
    deleteCourse
}