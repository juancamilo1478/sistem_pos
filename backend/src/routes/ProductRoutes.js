const {createproduct,getproducts}=require('../controller/ProductsControllers/index');
const multer = require('multer');
const upload = multer();
const midalware=require('../midelwares/auth');

const productsRoutes=require('express').Router();
    productsRoutes
    productsRoutes.get('/get',midalware,getproducts)
    productsRoutes.post('/create', midalware, upload.array('files'), createproduct);
  
    module.exports=productsRoutes;
