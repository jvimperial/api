const mongoose = require('mongoose');

const WebUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const WebUserModel = mongoose.model("webusers", WebUserSchema);

module.exports = WebUserModel;