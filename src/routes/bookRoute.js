const bookRoutes = require('express').Router();
const bookController = require('../controller/bookController');
const authMidlleware = require('../helpers/authMiddleware');

// bookRoutes.get('/', authMidlleware.checkLogin, bookController.getBooks);
bookRoutes.post('/', authMidlleware.checkLogin, bookController.addBooks);

bookRoutes.get('/', bookController.getBooks);
bookRoutes.get('/:id_buku', bookController.getBooksid );



bookRoutes.delete('/:id_buku',authMidlleware.checkLogin, bookController.deleteBooks);
bookRoutes.put('/:id_buku',authMidlleware.checkLogin, bookController.updateBooks);



module.exports = bookRoutes;