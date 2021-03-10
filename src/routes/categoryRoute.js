const categoryRoutes = require('express').Router();
const categoryController =  require('../controller/categoryController');
const authMiddleware = require('../helpers/authMiddleware');

categoryRoutes.post('/',categoryController.addCategory);
categoryRoutes.get('/',categoryController.getCategory);
categoryRoutes.get('/:id_kategori',categoryController.getCategoryid);

module.exports=categoryRoutes