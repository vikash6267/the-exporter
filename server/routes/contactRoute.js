const express = require("express");
const { createContactCtrl, createEnquiryCtrl } = require("../controllers/contactCtrl");
const router = express.Router();

router.post("/create", createContactCtrl)
router.post("/enquiry", createEnquiryCtrl)


module.exports = router