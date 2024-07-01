const { uploadImageToCloudinary } = require("../config/imageUploader");
const heroModel = require("../models/hero")

const createHeroCtrl = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const image = req.files.image;

        if (!title || !desc || !image) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }
        const thumnailImage = await uploadImageToCloudinary(image, process.env.FOLDER_NAME)

        const slider = await heroModel.create({
            title,
            desc,
            image: thumnailImage.secure_url
        })

        return res.status(201).json({
            success: true,
            message: "Hero slider created successfully!",
            slider
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in create hero api!"
        })
    }
}


const getAllHeroCtrl = async (req, res) => {
    try {

        const sliders = await heroModel.find({});
        if (!sliders) {
            return res.status(400).json({
                success: false,
                message: "No blog found"
            })
        }
        return res.status(200).json({
            success: true,
            totalSliders: sliders.length,
            sliders
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in getting slider api!"
        })
    }
}

const deleteHeroCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await heroModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Slider delete successfully!"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in deleting slider api!"
        })
    }
}
module.exports = { createHeroCtrl, getAllHeroCtrl, deleteHeroCtrl };