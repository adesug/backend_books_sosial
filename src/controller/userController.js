const { PrismaClient } = require ('@prisma/client');
const e = require('express');
const prisma = new PrismaClient();

module.exports = {
    
    getUsers : (req, res) => {
        prisma.tb_user.findMany()
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                delete data[i].password
               
            }    
            res.send ({
                msg : "success",
                status : 200,
                data
            })

        })
        .catch ((error) => {
            res.send ({
                msg: "error",
                status : 500,
                error
            })
        })
    },
    getUsersid : (req, res) => {
        const id_user = req.params.id_user;
        // console.log('data', data);
        prisma.tb_user.findUnique({
            where:{
                id_user:parseInt(id_user)
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
    updateUsers : (req, res) => {
        const id_user = req.params.id_user;
        // const {body} = req 
        // const newData = {
        //     ...body,
        //     id_user : Number (body.id_user),
        //     id_kategori : Number (body.id_kategori),
        //     pages : Number (body.pages),
        //     isbn : Number (body.isbn)
        // }
        prisma.tb_user.update({
            where : {
                id_user : parseInt(id_user)
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
    }

}