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
            return res.json({results: authors});
        }
    });
});

module.exports = router;