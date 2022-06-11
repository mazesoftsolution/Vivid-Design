const mongoose=require('mongoose')
const Schema=mongoose.Schema
const BlogSchema = new Schema({

    blog_title:{
        type:String,
        required:true
    },
    blog_meta_description:{
        type:String,
        required:true
    },
    blog_description:{
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
const BlogModel= new mongoose.model('admin_blog', BlogSchema)

module.exports=BlogModel
    