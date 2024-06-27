const contactModel = require("../models/contactModel")
const mailSender = require("../utils/mailSenderr")
const { contactUsEmail } = require("../template/contactFormRes")
const { enquiryEmail } = require("../template/enquiry")

const createContactCtrl = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "vikasmaheshwari6267@gmail.com",
            "Your Data send successfully",
            contactUsEmail(name, email, phone, subject, message)
        )

        const contact = await contactModel.create({ name, email, phone, subject, message });
        return res.status(201).json({
            success: true,
            message: "Contact form submited successfully!"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create contact api!"
        })
    }
}


const createEnquiryCtrl = async (req, res) => {
    try {
        const { name, companyName, product, quantity, email, contactNumber, country, state, address } = req.body;
        if (!name || !companyName || !product || !quantity || !email || !contactNumber || !country || !state || !address) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "vikasmaheshwari6267@gmail.com",
            "Your Data send successfully",
            enquiryEmail(name, companyName, product, quantity, email, contactNumber, country, state, address)
        )
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create enquiry api!"
        })
    }
}
module.exports = { createContactCtrl, createEnquiryCtrl }