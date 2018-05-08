const express = require('express')
const router = express.Router()
const db = require('../database')
const { getAllBooks, getBookById } = require('../database')


router.get('/book/:id', (req, res, next) => {
  const book_id = req.params.id
  db.getBookById(book_id)
    .then(book => {
      res.json(book)
    })
})

/* GET home page. */
router.get('/', function (request, response, next) {
  // Initial db read to create array books
  response.render('layout', { books: [{ title: 'Im a book', bookUrl: 'blah' }] })
});

router.get('/book', function (request, response, next) {
  db.getAllBooks()
    .then(books => response.render('layout', { books }))
});

module.exports = router;