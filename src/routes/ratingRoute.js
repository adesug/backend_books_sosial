const ratingRoutes = require ('express').Router();
const bookController = require('../controller/bookController');
const { getRating } = require('../controller/ratingController');
const ratingController = require ('../controller/ratingController');
const authMiddleware = require ('../helpers/authMiddleware');


ratingRoutes.post('/',authMiddleware.checkLogin,ratingController.addRating);
// ratingRoutes.post('/',ratingController.addRating);
ratingRoutes.get('/',ratingController.getRating);
ratingRoutes.get('/:id_rating',ratingController.getRatingid);
// ratingRoutes.put('/:id_rating',authMiddleware.checkLogin,ratingController.UpdateRating);
ratingRoutes.put('/:id_rating',ratingController.UpdateRating);


module.exports= ratingRoutes