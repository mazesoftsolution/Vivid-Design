const mongoose=require('mongoose')
const Schema=mongoose.Schema
const GallerySchema = new Schema({

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
const GalleryModel= new mongoose.model('admin_gallery', GallerySchema)

module.exports=GalleryModel
    