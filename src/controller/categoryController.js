const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addCategory : (req, res) => {
        // const deCoded_id_user = req.decodeToken.id_user;
        const {body} = req
        const newBody = {
            ...body,
            img_kategori:req.file.path,
            // id_buku : Number (body.id_buku),
            // id_user : deCoded_id_user

        }
        prisma.tb_kategori.create({
            data : newBody 
        })
        .then ((data) => {
           res.send ({
               msg: "success",
               status: 200,
               data: data,

           });
        })
        .catch((error) => {
           res.send ({
               msg : "error",
               status : 500,
               error : error
           });
       });
    },
    getCategory : (req, res) => {
        prisma.tb_kategori.findMany()
        .then((data) => {
            res.send ({
                msg : "success",
                status : 200,
                data
            })
            console.log(data);

        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500 ,
                error : error
            })
        })
    },
    getCategoryid : (req , res ) => {
        const id_kategori = req.params.id_kategori;
        prisma.tb_kategori.findUnique({
            where:{
                id_kategori:parseInt(id_kategori)
            }
        })
        .then((data) => {
            res.send({
                msg: "success",
                status : 200,
                data
            })

            console.log(data);
        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500,
                error
            });
            console.log(error);
        });
    },
    updateCategory : (req,res) => {
        const id_kategori = req.params.id_kategori;
        const {body} = req 
        const newData = {
            ...body,
            img_kategori:req.file.path
        }
        prisma.tb_kategori.update({
            where : {
                id_kategori : parseInt(id_kategori)

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
    }
    
}