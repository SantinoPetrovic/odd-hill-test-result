// Get dependencies
const express = require('express');

const database = require('../global/db');
const DB = database();

// Define router
const router = express.Router();

router.get('/', (req, res, next) => {
	res.end('Invalid endpoint.');
});

// Search for books by isbn or title
router.get('/books', (req, res, next) => {
    if (req.query.isbn || req.query.title) {
        let sqlString = "SELECT * FROM books WHERE";
        let reqQuery = "";

        if (req.query.isbn) {
            reqQuery = req.query.isbn;
            sqlString += " isbn LIKE ?";
        } else if (req.query.title) {
            reqQuery = "%"+req.query.title+"%";
            sqlString += " title LIKE ?";
        }

        DB.all(sqlString, [reqQuery], function(err, books) {
            if (err) {
                return res.json({success: false, msg: err});
            } else if (books.length < 1) {
                return res.json({success: true, msg: "No books found."});
            } else {
                return res.json({success: true, results: books});
            }
        });
    } else {
        return res.json({success: false, msg: "Not a valid query. Define ISBN number or title for getting books."});
    }
});

module.exports = router;