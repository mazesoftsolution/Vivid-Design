const mongoose=require('mongoose')
const Schema=mongoose.Schema
const upcomingSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
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
const UpcomingModel= new mongoose.model('admin_upcoming_project', upcomingSchema)

module.exports=UpcomingModel
    