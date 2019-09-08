// Get dependencies
const express = require('express');

const database = require('../global/db');
const DB = database();

// Define router
const router = express.Router();

// List all authors
router.get('/', (req, res, next) => {
    DB.all("SELECT * FROM authors", function(err, authors) {
        if (err) {
            return res.json({success: false, msg: err});
        } else {
            return res.json({success: true, results: authors});
        }
    });
});

// Get a single author by ID.
router.get('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    DB.get("SELECT * FROM authors WHERE id = ?", [authorId], function(err, author) {
        if (err) {
            return res.json({success: false, msg: err});
        } else if (author === undefined) {
            return res.json({success: true, msg: "No author found."});
        } else {
            return res.json({success: true, results: author});
        }
    });
});

// List all books for a specific author.
router.get('/:authorId/books', (req, res, next) => {
    const authorId = req.params.authorId;
    DB.all("SELECT books.* FROM books INNER JOIN authors_books ON books.id = authors_books.book_id WHERE authors_books.author_id = ?", [authorId], function(err, books) {
        if (err) {
            return res.json({success: false, msg: err});
        } else if (books.length < 1) {
            return res.json({success: true, msg: "No books found."});
        } else {
            return res.json({success: true, results: books});
        }
    });
});


module.exports = router;