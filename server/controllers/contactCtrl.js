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
            "thebharatexporter@gmail.com",
            // "vikasmaheshwari6267@gmail.com",
            "New contact form details",
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
        console.log(req.body)
        const { name, companyName, product, quantity, email, contactNumber, country, state, address ,city,phoneCode} = req.body;
        if (!name || !companyName || !product || !quantity || !email || !contactNumber || !country || !state || !city || !address ||!phoneCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "thebharatexporter@gmail.com",
            // "vikasmaheshwari6267@gmail.com",
            "New Enquiry",
            enquiryEmail(name, companyName, product, quantity, email, contactNumber, country, state,city, address,phoneCode)
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