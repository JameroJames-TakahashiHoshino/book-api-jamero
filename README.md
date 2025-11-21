 Book API (Node.js + Express)

This is a simple Book API built with Node.js and Express.
It stores book data in memory (not using a database yet), and includes full CRUD operations.

I made this mainly for practice with Express routing and REST APIs.

 How to Run
1. Install dependencies
npm install

2. Start the server
node server.js

3. Open in browser or Postman

Server runs at:

http://localhost:3000

 Available Endpoints
GET /

Returns a welcome message.

GET /books

Returns all books in the list.

POST /books

Adds a new book.
JSON body example:

{
  "id": 4,
  "title": "New Book Title",
  "author": "Book Author"
}

PUT /books/:id

Updates a book by ID.

DELETE /books/:id

Deletes a book by ID.

 Notes

The API uses an in-memory array, so data resets whenever the server restarts.

Good starting point before adding MongoDB or MySQL.

Very simple code, beginner-friendly.
