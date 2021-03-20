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
        // const deCoded_id_user = req.decodeToken.id_user;
        const id_user = req.params.id_user;
        const {body} = req 
        const newData = {
            ...body,
            img_profil:req.file.path,
            id_user : Number (body.id_user),
            // id_user : deCoded_id_user

            
        }
        prisma.tb_user.update({
            where : {
                id_user : parseInt(id_user)
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