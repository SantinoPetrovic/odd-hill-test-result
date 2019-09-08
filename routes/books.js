// Get dependencies
const express = require('express');

const database = require('../global/db');
const DB = database();

// Define router
const router = express.Router();

// List all books
router.get('/', (req, res, next) => {
    DB.all("SELECT * FROM books", function(err, books) {
        if (err) {
            return res.json({success: false, msg: err});
        } else {
            return res.json({success: true, results: books});
        }
    });
});

// Get a single book by ID.
router.get('/:bookId', (req, res, next) => {
    const bookId = req.params.bookId;
    DB.get("SELECT * FROM books WHERE id = ?", [bookId], function(err, book) {
        if (err) {
            return res.json({success: false, msg: err});
        } else if (book === undefined) {            
            return res.json({success: true, results: "No book found."});
        } else {
            return res.json({success: true, results: book});
        }
    });
});

// List all authors for a specific book.
router.get('/:bookId/authors', (req, res, next) => {
    const bookId = req.params.bookId;
    DB.all("SELECT authors.* FROM authors INNER JOIN authors_books ON authors.id = authors_books.author_id WHERE authors_books.book_id = ?", [bookId], function(err, authors) {
        if (err) {
            return res.json({success: false, msg: err});
        } else if (authors.length < 1) {
            return res.json({success: true, msg: "No authors found."});
        } else {
            return res.json({success: true, results: authors});
        }
    });
});

module.exports = router;