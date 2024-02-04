const{Users}=require('../../db');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const authConfig =require('../../config/authConfig');
module.exports=async(req,res)=>{
    const {  password,gmail } = req.body;  
    try{
         await Users.findOne({
            where:{
              gmail:gmail
            }
        }).then(user=>{
            if(!user){
                throw new Error("no existe este usuario")
            }else{
              if (bcrypt.compareSync(password,user.password)) {

                //devolvemos token
                let token=jwt.sign({user:user},authConfig.secret,{
                    expiresIn:authConfig.expires
                })
                res.json({
                    user:user,
                    token:token
                })
              }else{
                throw new Error("contraseña no coinside ")
              }
            }
        })
       
    }
    catch(error){   
    res.status(500).json({ error: error.message });
    }
}