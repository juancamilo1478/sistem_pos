const {createproduct}=require('../controller/ProductsControllers/index');
const multer = require('multer');
const upload = multer();
const midalware=require('../midelwares/auth');

const productsRoutes=require('express').Router();
    productsRoutes
    productsRoutes.post('/create', midalware, upload.array('files'), createproduct);

    module.exports=productsRoutes;
