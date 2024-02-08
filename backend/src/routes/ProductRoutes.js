const {createproduct}=require('../controller/ProductsControllers/index');
const multer = require('multer');
const upload = multer();


const productsRoutes=require('express').Router();
    productsRoutes
    productsRoutes.post('/create', upload.array('files'), createproduct);

    module.exports=productsRoutes;
