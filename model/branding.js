const mongoose=require('mongoose')
const Schema=mongoose.Schema
const BrandingSchema = new Schema({

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
const BrandingModel= new mongoose.model('admin_branding', BrandingSchema)

module.exports=BrandingModel
    