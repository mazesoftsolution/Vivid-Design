const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at:{
        type:Date,default:Date.now
    },
    status: {
        type: Number,
        default: 1
    }
});

const AdminloginModel = new mongoose.model("user", AdminSchema);
module.exports = AdminloginModel;