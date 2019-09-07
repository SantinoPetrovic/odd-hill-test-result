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
            return res.json({results: books});
        }
    });
});

module.exports = router;