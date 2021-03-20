const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getBooks : (req, res) => {
        // console.log('data', data);
        prisma.tb_buku.findMany({
            include: {
                tb_kategori: {
                  select: {
                    nama_kategori: true,
                    img_kategori:true,
                  }
                },
                tb_user: {
                    select: {
                      username: true,
                    }
                },
                tb_rating: {
                    select: {
                        rating: true
                    }
                },
                tb_diskusi:{
                    select: {
                        diskusi : true,
                        id_user: true 
                    }
                }
            }
        })
        .then((data) => {
            res.send ({
                msg: "success",
                status: 200,
                data: data,
            })
            console.log(data);
        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500,
                error : error
            });
            console.log(error);
        });
    },
    getBooksid : (req, res) => {
        const id_buku = req.params.id_buku;
        // console.log('data', data);
        prisma.tb_buku.findUnique({
            where:{
                id_buku:parseInt(id_buku)
            }
        })
        .then((data) => {
            res.send ({
                msg: "success",
                status: 200,
                data: data,
            })
            console.log(data);
        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500,
                error : error
            });
            console.log(error);
        });
    },
    addBooks:(req,res)=>{
        const deCoded_id_user = req.decodeToken.id_user;
        const { body } = req;
        const newBody = {
          ...body,
          
        //   id_rating : Number (body.id_rating),
          img_buku:req.file.path,

          id_kategori : Number (body.id_kategori),
          pages : Number (body.pages),
          isbn : Number (body.isbn),
          id_user : deCoded_id_user
        };
        console.log("ini user", newBody);
        prisma.tb_buku.create({
            data: newBody,
          })
          .then((data) => {
            res.send({
              message: "Data Books Success Upload",
              status: 200,
              data: data,
            });
          })
          .catch((err) => {
            res.send({ message: "Error While Add data", status: 500, error: err });
          });
    },
    deleteBooks : (req, res) => {
        const id_buku = req.params.id_buku;
        prisma.tb_buku.delete({
            where : {
                id_buku : parseInt(id_buku)
            }
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
    updateBooks : (req, res) => {
        const id_buku = req.params.id_buku;
        const {body} = req 
        const newData = {
            ...body,
            img_buku:req.file.path,
            id_user : Number (body.id_user),
            id_kategori : Number (body.id_kategori),
            pages : Number (body.pages),
            isbn : Number (body.isbn)
            
        }
        prisma.tb_buku.update({
            where : {
                id_buku : parseInt(id_buku)
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