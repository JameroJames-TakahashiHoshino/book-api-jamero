const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];


app.get("/", (req, res) => {
  res.send("Welcome to the Book API! Use /books to view the book list.");
});


app.get("/books", (req, res) => {
  res.json(books);
});

)
app.post("/books", (req, res) => {
  const { id, title, author } = req.body;
  if (!id || !title || !author) {
    return res.status(400).json({ message: "All fields are required (id, title, author)" });
  }
  books.push({ id, title, author });
  res.status(201).json({ message: "Book added successfully", books });
});


app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ message: "Book updated successfully", book });
});


app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully", books });
});
// start kona server ko sa localhost 3000
app.listen(3000, () => {
  console.log(" Book API running at http://localhost:3000");
});
