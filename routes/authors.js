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

module.exports = router;