const userRoutes = require('express').Router();
const userController =  require('../controller/userController');
const authMiddleware = require('../helpers/authMiddleware');
const authRoutes = require ('./authRoute')
const uploadMiddleware = require('../helpers/uploadMiddlewareUser')

userRoutes.get('/', userController.getUsers);
userRoutes.get('/:id_user',authMiddleware.checkLogin, userController.getUsersid);
userRoutes.put('/:id_user',uploadMiddleware, userController.updateUsers);

// userRoutes.put('/:id_user',authMiddleware.checkLogin,uploadMiddleware, userController.updateUsers);



module.exports = userRoutes ; 
