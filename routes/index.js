const  express = require("express");
const router = express.Router()
const db = require("/Users/rcbrown/Workspace/shortWallabyBookstore/database.js");
const { getAllBooks, getBookById } = require("/Users/rcbrown/Workspace/shortWallabyBookstore/database.js");


// router.get('/book/:id', (req, res, next) => {
//   const book_id = req.params.id
//   db.getBookById(book_id)
//     .then(book => {
//       res.json(book)
//     })
// })

router.get('/', (request, response, next) => {
  db.getAllBooks()
    .then(data => {
      response.render('layout', {
        title: "Short Wallaby Bookstore",
        books: data
      })
    })
    .catch(function (err) {
      return next(err)
    })
});


// /* GET home page. */
// router.get('/', function (request, response, next) {
//   // Initial db read to create array books
//   response.render('layout', { books: [{ title: 'Im a book', bookUrl: 'blah' }] })
// });

// router.get('/book', function (request, response, next) {
//   db.getAllBooks()
//     .then(books => response.render('layout', { books }))
// });

module.exports = router;