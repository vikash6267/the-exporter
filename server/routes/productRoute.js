const express = require("express");
const { productCreateCtrl, getAllProductCtrl, deleteProductCtrl } = require("../controllers/productCtrl");

const router = express.Router();

router.post("/create", productCreateCtrl)
router.get("/getAll", getAllProductCtrl)
router.delete("/delete/:id", deleteProductCtrl)

module.exports = router