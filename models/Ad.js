const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        href:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
);

module.exports = mongoose.model("Ad", AdSchema);