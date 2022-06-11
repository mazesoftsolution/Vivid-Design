const mongoose=require('mongoose')
const Schema=mongoose.Schema
const FabricatorSchema = new Schema({

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
const FabricatorModel= new mongoose.model('admin_fabricator', FabricatorSchema)

module.exports=FabricatorModel
    