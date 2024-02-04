const jwt=require('jsonwebtoken');
const authConfig=require('../config/authConfig');
module.exports=(req,res,next)=>{
    console.log(headers);
    if(!req.headers.authorization){
        res.status(401).json({msg:"Acceso no autorizado"});

    }else{
        let token=req.headers.authorization.split(" ")[1];
        //comprobar validez de token
        jwt.verify(token,authConfig.secret,(err,decode)=>{
            if(err){
                res.status(500).json({
                    msg:"problema al decodificar el token"
                })
            }else{
                console.log(decode)
                next()
            }
        });

 
    }
}