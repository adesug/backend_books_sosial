const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addDiskusi: (req,res) => {
        const deCode_id_user = req.decodeToken.id_user;
        const { body } = req ;
        const newData = {
            ...body,
            id_buku : Number (body.id_buku),
            id_user : deCode_id_user
            // id_user: Number (body.id_user)
        };

        prisma.tb_diskusi.create({
            data: newData,
        })
        .then((data) => {
            res.send({
                msg: "success",
                status: 200,
                data
            });
        })
        .catch((err) => {
            res.send({
                msg:'error',
                status : 500,
                error
            })
        })
    },

    getDiskusi : (req, res) => {
        prisma.tb_diskusi.findMany()
        .then((data) => {
            res.send({
                msg : 'success',
                status : 200,
                data 
            });
        })
        .catch((err) => {
            res.send({
                msg:'error',
                status : 500,
                error
            })
        })
    },
    updateDiskusi : (req,res) => {
        const deCode_id_user = req.decodeToken.id_user;
        const id_diskusi = req.params.id_diskusi;
        const{body} = req
        const newData = {
            ...body,
            id_buku : Number (body.id_buku),
            id_user : deCode_id_user
        }
        prisma.tb_diskusi.update({
            where:{
                id_diskusi : parseInt(id_diskusi)
            },
            data:newData
        })
        .then((data) => {
            res.send({
                msg:"success",
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.send ({
                msg : "error",
                status : 500,
                error : error
            });
        });
    
    },
    deleteDiskusi : (req,res) => {
        const deCode_id_user = req.decodeToken.id_user;
        const id_diskusi = req.params.id_diskusi;
        const {body} = req
        const newData = {
            ...body,
            id_user : deCode_id_user
        }
        prisma.tb_diskusi.delete({
            where : {
                id_diskusi : parseInt(id_diskusi)
            }
        })
        .then((data) => {
            res.send ({
                msg: "success",
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.send ({
                msg : "error",
                status : 500,
                error : error
            });
        });
    }
    
}