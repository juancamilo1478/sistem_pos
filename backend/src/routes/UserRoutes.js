const { register,login} =require('../controller/userController/index');

const userRoutes=require('express').Router();
userRoutes
    .post('/register',register)
   .post('/login',login)

 module.exports=userRoutes;   