// Get dependencies
const express = require('express');

// Define app
const app = express();

// Get routes
const authors = require('./routes/authors');
const books = require('./routes/books');
const genres = require('./routes/genres');

// Use routes
app.use('/artist', artist);
app.use('/books', artist);
app.use('/genres', artist);

// Run app
app.listen(3000, function(){
    console.log("Running on port 3000!");
});