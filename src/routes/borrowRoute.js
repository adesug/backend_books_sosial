const borrowRoutes = require('express').Router();
const borrowController = require('../controller/borrowController');
const authMiddleware = require('../helpers/authMiddleware');
// const bookRoutes = require('./borrowRoute');

borrowRoutes.post('/',authMiddleware.checkLogin,borrowController.addBorrow);
borrowRoutes.get('/',borrowController.getBorrow);

module.exports = borrowRoutes;