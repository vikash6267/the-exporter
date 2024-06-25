const createContactCtrl = () => {
    try {
        const { name, email, phone, message } = req.body

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create contact api!"
        })
    }
}

module.exports = { createContactCtrl }