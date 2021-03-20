const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addBorrow: (req,res) => {
        const deCode_id_user = req.decodeToken.id_user;
        const {body} = req;
        const newBody = {
            ...body,
            id_buku:parseInt(body.id_buku),
            tgl_pinjam : new Date(body.tgl_pinjam),
            tgl_kembali : new Date(body.tgl_kembali),
            status: Boolean(body.status),
            id_user : deCode_id_user

        };

        prisma.tb_pinjam.create({
            data : newBody
        })
        .then((data) => {
            res.send({
            msg: "succes",
            status: 200,
            data: data,
        });
        console.log(data);
        })
    
        .catch((err) => {
            req.send({
            msg: "eror",
            status: 500,
        });
        console.log(err);
        });
    },
    getBorrow : (req, res) => {
        prisma.tb_pinjam.findMany({
            include:{
                tb_buku:{
                    select:{
                        id_user : true,
                    }
                }
            }
        })
        .then((data) => {
            res.send({
                msg : 'succes',
                status : 200,
                data : data,
            });
        })
        .catch((error) => {
            res.send({
                msg : 'error',
                status : 500,
                error : error,
             });
        });
    }

}