const mongoose = require("mongoose");

const hereSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Hero", hereSchema);
