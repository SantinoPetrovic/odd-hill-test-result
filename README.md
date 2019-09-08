# Odd Hill test results

This repository contains results for making a test from Odd Hill.

The following test result contains routing for following points:

- List all books
- List all authors
- List all genres
- List all authors for a specific book
- List all books for a specific author
- List all genres for a specific book
- Get a single book by ID
- Get a single author by ID
- Get a single genre by ID
- Search for books by ISBN
- Search for books by title
- Search for authors by name
- Search for genres by name

## Installation and run

Clone this repo and run following command `npm install` and thereafter `npm start`.

## Examples of URL routes

`/authors` - List out all authors.

`/books` - List out all books.

`/genres` - List out all books.

`/authors/1` - Get a single author, which have ID 1.

`/books/1` - Get a single book, which have ID 1.

`/genres/1` - Get a single genre, which have ID 1.

`/books/1/authors` - List out all authors, which are connected to a book with ID 1.

`/books/1/genres` - List out all genres, which are connected to a book with ID 1.

`/authors/1/books` - List out all books, which are connected to a author with ID 1.

`/search/books?title=Harry%20Potter%20and%20the%20Chamber%20of%20Secrets` - Search all books, which contains the title: 'Harry Potter and the Chamber of Secrets'.

`/search/books?isbn=9781408855669` - Search all books, which have the ISBN number of 9781408855669.

`/search/authors?name=J.R.R.%20Tolkien` - Search all authors, which contains the name: 'J.R.R. Tolkien'.

`/search/genres?name=Fantasy` - Search all authors, which contains the name: 'J.R.R. Tolkien'.
