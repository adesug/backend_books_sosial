const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addRating : (req, res) => {
        const deCode_id_user = req.decodeToken.id_user;
        const {body} = req; 
        const newBody = {
            ...body,
            rating : Number (body.rating),
            id_buku : Number (body.id_buku),
            id_user : deCode_id_user
        }
        console.log("test", newBody);
        prisma.tb_rating.create({
            data:newBody
        })
        .then ((data) => {
            res.send ({
                msg : "success",
                status : 200,
                data:data
            });
        })
        .catch((error) => {
            res.send({
                msg:"error",
                status : 500,
                error: error
            })
        })
    },
    getRating : (req,res) => {
        prisma.tb_rating.findMany()
        .then((data) => {
            res.send ({
                msg: "success",
                status: 200,
                data
            })
        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500 ,
                error : error
            })
        })
    },
    getRatingid : (req,res) => {
        const id_rating = req.params.id_rating;
        prisma.tb_rating.findUnique({
            where: {
                id_rating:parseInt(id_rating)
            }
        })
        .then((data) => {
            res.send({
                msg : "success",
                status : 200,
                data
            })
        })
        .catch ((error) => {
            res.send ({
                msg : "error",
                status : 500 ,
                error : error
            })
        })
    },
    UpdateRating : (req, res ) => {
        // const deCode_id_user = req.decodeToken.id_user;
        const id_rating = req.params.id_rating;
        const {body} = req 
        const newData = {
            ...body,
            rating : Number (body.rating),
            id_buku : Number (body.id_buku)
            // id_user : deCode_id_user
        }
        prisma.tb_rating.update({
            where: {
                id_rating : parseInt(id_rating),
                
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