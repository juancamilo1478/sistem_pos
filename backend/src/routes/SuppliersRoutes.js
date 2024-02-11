const { createsupplier ,getSuppliers} = require("../controller/SupplierControllers/index");
// const multer = require('multer');
// const upload = multer();
const midalware = require("../midelwares/auth");

const SupplierController = require("express").Router();
SupplierController;
SupplierController.get("/get",midalware,getSuppliers)
SupplierController.post("/create", midalware, createsupplier);

module.exports = SupplierController;
