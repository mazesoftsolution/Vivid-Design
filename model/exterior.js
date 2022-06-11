const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ExteriorSchema = new Schema({

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
const ExteriorModel= new mongoose.model('admin_exterior', ExteriorSchema)

module.exports=ExteriorModel
    