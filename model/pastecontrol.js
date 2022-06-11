const mongoose=require('mongoose')
const Schema=mongoose.Schema
const PastecontrolSchema = new Schema({

    image:{
        type:String,
        required:true
    },
    status:{
        type:Number
    },
    created_at:{
        type:Date,default:Date.now
    }
})
const PastecontrolModel= new mongoose.model('admin_paste_control', PastecontrolSchema)

module.exports=PastecontrolModel
    