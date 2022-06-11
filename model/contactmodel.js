const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    },  
    created_at:{
        type:Date,default:Date.now
    }
});

const ContactModel = new mongoose.model("contact_info", ContactSchema);
module.exports = ContactModel;