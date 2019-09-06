// Get dependencies
const express = require('express');

const database = require('../global/db');
const DB = database();

// Define router
const router = express.Router();

// List all books
router.get('/', (req, res, next) => {
	
});

module.exports = router;