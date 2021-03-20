const bookRoutes = require('express').Router();
const bookController = require('../controller/bookController');
const authMidlleware = require('../helpers/authMiddleware');
const uploadMiddleware = require('../helpers/uploadMIddlewareBooks');

bookRoutes.get('/', bookController.getBooks);

// bookRoutes.get('/', authMidlleware.checkLogin, bookController.getBooks);
bookRoutes.post('/', authMidlleware.checkLogin,uploadMiddleware, bookController.addBooks);
bookRoutes.get('/:id_buku', bookController.getBooksid );
bookRoutes.delete('/:id_buku',authMidlleware.checkLogin, bookController.deleteBooks);
bookRoutes.put('/:id_buku',authMidlleware.checkLogin, uploadMiddleware,bookController.updateBooks);



module.exports = bookRoutes;