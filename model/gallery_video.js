const mongoose=require('mongoose')
const Schema=mongoose.Schema
const videoSchema = new Schema({

video_link:{
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
const VideoModel= new mongoose.model('admin_video', videoSchema)

module.exports=VideoModel
    