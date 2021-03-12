const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addCategory : (req, res) => {
        const {body} = req
        const newData = {
            ...body,
            // id_buku : Number (body.id_buku)
            
            
        }
        prisma.tb_kategori.create({
            data : newData 
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

        // const id_kategori = Number(req.params.id_kategori)
        // prisma.tb_kategori.findUnique({
        //     where: {
        //         id_kategori: id_kategori
        //     }
        // })
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
    }
}