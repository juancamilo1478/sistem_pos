const {createbills,addProductBills,getbillsactives,getbillid} =require('../controller/billsControllers/index')
const midalware = require("../midelwares/auth");

const BillsController = require("express").Router();
        BillsController.get('/actives',getbillsactives)
        BillsController.get('/billId/:id',getbillid)
        BillsController.post("/create", midalware, createbills);

module.exports=BillsController
