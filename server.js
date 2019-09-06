// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Define app
const app = express();

// Get routes
const authors = require('./routes/authors');
const books = require('./routes/books');
const genres = require('./routes/genres');

// Ready app up for json format
app.use(bodyParser.json());

// Use routes
app.use('/authors', authors);
app.use('/books', books);
app.use('/genres', genres);

// Run app
app.listen(3000, function(){
    console.log("Running on port 3000!");
});