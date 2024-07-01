const express = require("express");
const { createHeroCtrl, getAllHeroCtrl, deleteHeroCtrl } = require("../controllers/heroCtrl");
const router = express.Router();

router.post("/create", createHeroCtrl)
router.get("/getAll", getAllHeroCtrl)
router.delete("/delete/:id", deleteHeroCtrl)


module.exports = router