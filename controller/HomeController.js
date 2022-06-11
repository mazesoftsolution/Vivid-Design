const express=require('express');
const path = require('path')
const BlogModel = require('../model/AdminBlog')
const GalleryModel = require('../model/gallery')
const contactmodel = require('../model/contactmodel')
const exteriormodel = require('../model/exterior')
const interiormodel = require('../model/interior')
const civilworkmodel = require('../model/civilwork')
const fabricatormodel = require('../model/fabricator')
const brandingmodel = require('../model/branding')
const upcomingprojectmodel = require('../model/upcoming_project');
const pastecontrolmodel = require('../model/pastecontrol');
const securitymodel = require('../model/security');
const partnermodel = require('../model/partner');




exports.index=(req,res)=>{
    partnermodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('index',{
                partnerdata:data
             })
            
        }      
    })
}

exports.about =(req,res)=>{
    res.render('about')
}




// exports.photo_video =(req,res)=>{
//     res.render('photo_video')
// }

exports.blog=(req,res)=>{
    BlogModel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('blog',{
                blogdata:data
             })
            
        }      
    })
}

exports.security_systemlock=(req,res)=>{
    securitymodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('security_systemlock',{
                securitydata:data
             })
            
        }      
    })
}


exports.gallary=(req,res)=>{
    GalleryModel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('gallary',{
                gallerydata:data
             })
            
        }      
    })
}


exports.upcomming_projects=(req,res)=>{
    upcomingprojectmodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('upcomming_projects',{
                upcomingprojectdata:data
             })
            
        }      
    })
}


// exports.video =(req,res)=>{
//     res.render('video')
// }


exports.home_interior=(req,res)=>{
    interiormodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('home_interior',{
                interiordata:data
             })
            
        }      
    })
}
exports.home_exterior=(req,res)=>{
    exteriormodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('home_exterior',{
                exteriordata:data
             })
            
        }      
    })
}
exports.civil_work=(req,res)=>{
    civilworkmodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('civil_work',{
                civilworkdata:data
             })
            
        }      
    })
}



exports.fabricator=(req,res)=>{
    fabricatormodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('fabricator',{
                fabricatordata:data
             })
            
        }      
    })
}
exports.branding=(req,res)=>{
    brandingmodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('branding',{
              brandingdata:data
             })
            
        }      
    })
}
exports.paste_control=(req,res)=>{
    pastecontrolmodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('paste_control',{
             postcontroldata:data
             })
            
        }      
    })
}






exports.add_contact=(req,res)=>{
  
    const contactmodels = new contactmodel({
        name:req.body.contactname,
        email:req.body.contactemail,
        phone:req.body.contactphone,
        message:req.body.contactmessage,
        status: 1
    })
    contactmodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}
