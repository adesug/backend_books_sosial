const mainRoutes = require ('express').Router();

const bookController = require('../controller/bookController');
const authRoutes = require('./authRoute');
const bookRoutes = require('./bookRoute');
const userRoutes = require('./userRoute');
const categoryRoutes = require('./categoryRoute')

mainRoutes.use('/auth', authRoutes);
mainRoutes.use('/books', bookRoutes);
mainRoutes.use('/users', userRoutes);
mainRoutes.use('/category', categoryRoutes);

module.exports=mainRoutes