const Author = require("../models/Author")
const Customer = require("../models/Customer")
const Staff = require("../models/Staff")
const Book = require("../models/book")
const Product = require("../models/Product")
const Order = require("../models/Order")


//POPULATES
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


//DISCRIMINADORES

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

//TRANSACCIONES
const createProduct = async (req, res) =>{
    const {name, price, available, stock } = req.body

    const product = new Product({name, price, available, stock})

    await product.save()

    res.status(201).json(product)
}

const getProduct = async(req, res) => {
    const { productId } = req.query
    let query = undefined

    if (productId !== undefined) {
        query = Product.findById(productId)
    }else{
        query = Product.find({})
    }

    const response = await query.exec()

    res.json(response)
}

const makeProductAvailable = async(req, res) => {
    const { available, productId} = req.body

    const product = await Product.findById(productId)

    if (!product) return res.status(400).json({message: "no existe el producto"})
    
    if (available && product.stock === 0) return res.status(400).json({message: "no se puede ya que el stock = 0 "})
    
    product.available = available
    await product.save()

    res.json({message: 'producto actualizado', data: product })
}

const updateProduct = async(req, res) => {
    const { productId, price, stock } = req.body

    const product = await Product.findByIdAndUpdate(productId, { price, stock })

    if(!product) return res.status(400).json({message: "no existe el producto"})

    res.json({message:"producto actualizado", data: product})

}

const prepareOrder = async (req, res) => {
    const { customerId , productId, quantity } = req.body

    const order = new Order({customer: customerId,products:[{product: productId, quantity}]})

    await order.save()
    res.json(order)
}

module.exports = {
    createAuthor,
    createBook,
    getBooks,
    createStaff,
    getStaff,
    createCustomer,
    getCustomer, 
    createProduct,
    getProduct,
    makeProductAvailable,
    updateProduct, prepareOrder
}