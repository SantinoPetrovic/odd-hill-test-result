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
            return res.json({results: genres});
        }
    });
});

module.exports = router;