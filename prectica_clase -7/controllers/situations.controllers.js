const Author = require("../models/Author")
const Customer = require("../models/Customer")
const Staff = require("../models/Staff")
const Book = require("../models/book")

const createAuthor = async (req, res) => {
    const { firstName, lastName } = req.body
    const author = new Author({ firstName, lastName })
    await author.save()

    res.json(author)
}

const createBook = async (req, res) => {
    const { name, description, authorId } = req.body
    const book = new Book({ name, description, authorId })
    await book.save()

    res.json(book)
}

const getBooks = async (req, res) => {
    const { bookId, withAutorData } = req.query

    let query = undefined

    if (bookId !== undefined) {
        query = Book.findById(bookId)
    } else {
        query = Book.find({})
    }

    if (withAutorData === "YES") {
        query = query.populate('authorId')
    }

    const response = await query.exec()

    res.json(response)
}

const createStaff = async (req, res) => {
    const { username, employeeId } = req.body
    const staff = new Staff({ username, employeeId })

    await staff.save()
    res.json(staff)
}

const getStaff = async (req, res) => {
    const { employeeId } = req.query
    let query = undefined

    if (employeeId !== undefined) {
        query = Staff.findOne({employeeId})
    } else {
        query = Staff.find({})
    }

    const response = await query.exec()

    res.json(response)
}

const createCustomer = async (req, res) => {
    const { username} = req.body

    const customer = new Customer({username})

    await customer.save()

    res.json(customer)
}

const getCustomer = async(req, res) => {
    const { username } = req.query
    let query = undefined
    if(username !== undefined){
        query = Customer.findOne({ username })
    }else{
        query = Customer.find({})
    }

    const response = await query.exec()
    res.json(response)
}

module.exports = {
    createAuthor,
    createBook,
    getBooks,
    createStaff,
    getStaff,
    createCustomer,
    getCustomer
}