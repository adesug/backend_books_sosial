const diskusiRoutes = require('express').Router();
const diskusiController = require('../controller/diskusiController');
const authMiddleware = require('../helpers/authMiddleware')


diskusiRoutes.post('/',authMiddleware.checkLogin,diskusiController.addDiskusi);
diskusiRoutes.get('/', diskusiController.getDiskusi);
diskusiRoutes.put('/:id_diskusi',authMiddleware.checkLogin, diskusiController.updateDiskusi);
diskusiRoutes.delete('/:id_diskusi',authMiddleware.checkLogin, diskusiController.deleteDiskusi);




module.exports = diskusiRoutes ;