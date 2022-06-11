const mongoose=require('mongoose')
const Schema=mongoose.Schema
const InteriorSchema = new Schema({

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
const InteriorModel= new mongoose.model('admin_interior', InteriorSchema)

module.exports=InteriorModel
    