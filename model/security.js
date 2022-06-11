const mongoose=require('mongoose')
const Schema=mongoose.Schema
const SecuritySchema = new Schema({

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
const SecurityModel= new mongoose.model('admin_seciurity', SecuritySchema)

module.exports=SecurityModel
    