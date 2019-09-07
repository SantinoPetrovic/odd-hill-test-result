// Get dependencies
const express = require('express');

const database = require('../global/db');
const DB = database();

// Define router
const router = express.Router();

// List all genres
router.get('/', (req, res, next) => {
    DB.all("SELECT * FROM genres", function(err, genres) {
        if (err) {
            return res.json({success: false, msg: err});
        } else {
            return res.json({success: true, results: genres});
        }
    });
});

// Get a single genre by ID.
router.get('/:genreId', (req, res, next) => {
    const genreId = req.params.genreId;
    DB.get("SELECT * FROM genres WHERE id = ?", [genreId], function(err, genre) {
        if (err) {
            return res.json({success: false, msg: err});
        } else if (genre === undefined) {
            return res.json({success: true, results: "No genre found."});
        } else {
            return res.json({success: true, results: genre});
        }
    });
});

module.exports = router;