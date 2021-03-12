const ratingRoutes = require ('express').Router();
const ratingController = require ('../controller/ratingController');
const authMiddleware = require ('../helpers/authMiddleware');


// ratingRoutes.post('/',authMiddleware.checkLogin,ratingController.addRating);
ratingRoutes.post('/',ratingController.addRating);

module.exports= ratingRoutes