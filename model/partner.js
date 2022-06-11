const mongoose=require('mongoose')
const Schema=mongoose.Schema
const PartnerSchema = new Schema({

    partner_name:{
        type:String,
        required:true
    },
    partner_position:{
        type:String,
        required:true
    },
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
const PartnerModel= new mongoose.model('admin_Partner', PartnerSchema)

module.exports=PartnerModel
    