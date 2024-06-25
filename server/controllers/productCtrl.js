const productModel = require("../models/productModel")
const { uploadImageToCloudinary } = require("../config/imageUploader")


const productCreateCtrl = async (req, res) => {
    try {
        const { name, category } = req.body;
        const image = req.files.image;

        if (!name || !category || !image) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        const thumnailImage = await uploadImageToCloudinary(image, process.env.FOLDER_NAME);

        const product = await productModel.create({
            name,
            image: thumnailImage.secure_url,
            category
        })

        return res.status(201).json({
            success: true,
            message: "Product created successfully!",
            product
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create product api!"
        })
    }
}


const getAllProductCtrl = async (req, res) => {
    try {
        const products = await productModel.find({})
        return res.status(200).json({
            success: true,
            totalProductCount: products.length,
            products
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all product api!"
        })
    }
}


const deleteProductCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting  product api!"
        })
    }
}

module.exports = { productCreateCtrl, getAllProductCtrl, deleteProductCtrl }