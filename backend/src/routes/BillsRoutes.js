const {createbills,addProductBills,getbillsactives} =require('../controller/billsControllers/index')
const midalware = require("../midelwares/auth");

const BillsController = require("express").Router();
        BillsController.get('/actives',getbillsactives)
        BillsController.post("/create", midalware, createbills);

module.exports=BillsController
