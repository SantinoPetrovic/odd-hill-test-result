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

// Search for authors by name
router.get('/authors', (req, res, next) => {
    if (req.query.name) {
        let reqQuery = "%"+req.query.name+"%";
        DB.all("SELECT * FROM authors WHERE name LIKE ?", [reqQuery], function(err, authors) {
            if (err) {
                return res.json({success: false, msg: err});
            } else if (authors.length < 1) {
                return res.json({success: true, msg: "No authors found."});
            } else {
                return res.json({success: true, results: authors});
            }
        });
    } else {
        return res.json({success: false, msg: "Not a valid query. Define name for getting authors."});
    }
});

// Search for genres by name
router.get('/genres', (req, res, next) => {
    if (req.query.name) {
        let reqQuery = "%"+req.query.name+"%";
        DB.all("SELECT * FROM genres WHERE name LIKE ?", [reqQuery], function(err, genres) {
            if (err) {
                return res.json({success: false, msg: err});
            } else if (genres.length < 1) {
                return res.json({success: true, msg: "No genres found."});
            } else {
                return res.json({success: true, results: genres});
            }
        });
    } else {
        return res.json({success: false, msg: "Not a valid query. Define name for getting genres."});
    }
});

module.exports = router;