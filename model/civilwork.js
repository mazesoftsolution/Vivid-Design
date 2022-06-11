const mongoose=require('mongoose')
const Schema=mongoose.Schema
const CivilworkSchema = new Schema({

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
const CivilworkModel= new mongoose.model('admin_civilwork', CivilworkSchema)

module.exports=CivilworkModel
    