const mainRoutes = require ('express').Router();

const bookController = require('../controller/bookController');
const authRoutes = require('./authRoute');
const bookRoutes = require('./bookRoute');
const userRoutes = require('./userRoute');
const categoryRoutes = require('./categoryRoute');
const ratingRoutes = require('./ratingRoute');

mainRoutes.use('/auth', authRoutes);
mainRoutes.use('/books', bookRoutes);
mainRoutes.use('/users', userRoutes);
mainRoutes.use('/category', categoryRoutes);
mainRoutes.use('/rating', ratingRoutes);

module.exports=mainRoutes