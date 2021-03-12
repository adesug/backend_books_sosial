const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addRating : (req, res) => {
        // const deCode_id_user = req.deCode.id_user;
        const {body} = req; 
        const newBody = {
            ...body,
            rating : Number (body.rating),
            id_buku : Number (body.id_buku),
            // id_user : deCode_id_user
            id_user : Number (body.id_user)
           
           

        }
        console.log("ini user", newBody);
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
    }
}