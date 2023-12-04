const express = require ('express');
const app = express();

app.set('PORT', 3000)
app.use(express.json());

// Datos mockeados (para simular una base de datos)
let authors = [
    { id: 1, firstName: 'Jane', lastName: 'Doe' },
    { id: 2, firstName: 'Juan', lastName: 'Pepe' }
];

let books = [
    { id: 1, book: 'Jerry Potter', authorId: 1 },
    { id: 2, book: 'Jerry Potter', authorId: 2 }
];

const getAllAuthors = (req, res) => {
    //codigo para obtener todos los autores
    res.json(authors);
}

const getAuthorById = (req, res) => {
    //codigo para traer autor por id
    const authorId = parseInt(req.params.id);
    const author = authors.find(author => author.id === authorId);

    if (author == null){
        res.status(400)
        return res.json({message: "autor no encontrado"});
    }

    res.json(author);
}

const createAuthor = (req, res) => {
    // Codigo para crear autores
    const { id, firstName, lastName} = req.body;
    nuevoAutor = {id, firstName, lastName};
    authors.push(nuevoAutor);
    res.status(201);
    res.json(nuevoAutor);
}

const updateAuthor = (req, res) => {
    // codigo para actualizar autor
    const authorId = parseInt(req.params.id);
    const updatedAuthor = req.body;

    authors = authors.map(author => {
        if (author.id === authorId) {
            return { ...author, ...updatedAuthor };
        }
        return author;
    });

    res.json({ message: 'Autor actualizado' });
}

const deleteAuthor = (req, res) => {
    //codigo para eliminar autor
    const authorId = parseInt(req.params.id);

    authors = authors.filter(author => author.id != authorId);

    res.json({ message: 'Autor eliminado' });
}

const getAllBooks = (req, res) => {
    res.json(books);
}

const getBookById = (req, res) => {
    // Codigo para obtener libro por id
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);

    if (book == null){
        res.status(400)
        return res.json({message: "libro no encontrado"});
    }

    res.json(book);
}

const createBook = (req, res) => {
    // Codigo para crear libro
    const {id, book, authorId} = req.body;
    nuevoLibro = {id, book, authorId};
    authors.push(nuevoLibro);
    res.status(201);
    res.json(nuevoLibro);
}

const updateBook = (req, res) => {
    // Codigo para actualizar libro
    const bookId = parseInt(req.params.id);
    const updatedbook = req.body;

    books = books.map(book => {
        if (book.id === bookId) {
            return { ...book, ...updatedbook };
        }
        return book;
    });

    res.json({ message: 'Libro actualizado' });
}

const deleteBook = (req, res) => {
    // Codigo para eliminar libro
    const bookId = parseInt(req.params.id);

    books = books.filter(book => book.id != bookId);

    res.json({ message: 'libro eliminado' });
}

// Rutas aqui ---
app.get('/authors/findAll', getAllAuthors);
app.get('/authors/findById/:id', getAuthorById);
app.post('/authors/create', createAuthor);
app.put('/authors/update/:id', updateAuthor);
app.delete('/authors/delete/:id', deleteAuthor);

app.get('/books/findAll', getAllBooks);
app.get('/books/findById/:id', getBookById);
app.post('/books/create', createBook);
app.put('/books/update/:id', updateBook);
app.delete('/books/delete/:id', deleteBook);
// Rutas aqui ---

module.exports = {
    app,
    createAuthor,
    createBook,
    deleteAuthor,
    deleteBook,
    getAllAuthors,
    getAllBooks,
    getAuthorById,
    getBookById,
    updateAuthor,
    updateBook,
}