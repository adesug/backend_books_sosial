const userRoutes = require('express').Router();
const userController =  require('../controller/userController');
const authMiddleware = require('../helpers/authMiddleware');
const authRoutes = require ('./authRoute')

userRoutes.get('/', userController.getUsers);
userRoutes.get('/:id_user',authMiddleware.checkLogin, userController.getUsersid);
userRoutes.put('/:id_user', userController.updateUsers);

module.exports = userRoutes ; 
