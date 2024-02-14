const {createbills} =require('../controller/billsControllers/index')
const midalware = require("../midelwares/auth");

const BillsController = require("express").Router();
        BillsController.post("/create", midalware, createbills);

module.exports=BillsController
