const categoryRoutes = require('express').Router();
const categoryController =  require('../controller/categoryController');
const authMiddleware = require('../helpers/authMiddleware');
const uploadMiddleware = require('../helpers/uploadMiddlewareCategory')

categoryRoutes.post('/',authMiddleware.checkLogin,uploadMiddleware, categoryController.addCategory);
// categoryRoutes.post('/',uploadMiddleware,categoryController.addCategory);

categoryRoutes.get('/',categoryController.getCategory);
categoryRoutes.get('/:id_kategori',categoryController.getCategoryid);
categoryRoutes.put('/:id_kategori', authMiddleware.checkLogin,uploadMiddleware, categoryController.updateCategory);

module.exports=categoryRoutes