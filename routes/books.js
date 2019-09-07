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

module.exports = router;