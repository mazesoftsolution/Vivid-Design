const path=require('path')
const express=require('express');
const app=express()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminBlog=require('../model/AdminBlog');
const AdminGallery=require('../model/gallery');
const AdminvideoGallery=require('../model/gallery_video');
const AdminLogin = require('../model/adminregister');
const contactmodel = require('../model/contactmodel');
const exteriormodel = require('../model/exterior');
const interiormodel = require('../model/interior');
const civilworkmodel = require('../model/civilwork');
const fabricatormodel = require('../model/fabricator');
const brandingmodel = require('../model/branding');
const upcomingprojectmodel = require('../model/upcoming_project');
const pastecontrolmodel = require('../model/pastecontrol');
const securitymodel = require('../model/security');
const partnermodel = require('../model/partner');



// index start
exports.indexadmin=(req,res)=>{
    contactmodel.find((err,data)=>{
        if(!err){
            console.log(data)
             res.render('admin/admin_index',{
                contactdata:data
             })
            
        }      
    })
}


// index end

// blog start

exports.admin_blog=(req,res,next)=>{
    AdminBlog.find((err,data)=>{
        if(!err){
             res.render('admin/admin_blog',{
                displayblogdata:data
             })     
        }      
    })
}

exports.add_blog=(req,res)=>{
    const image= req.file
    // console.log(image);
    const AdminBlogs = new AdminBlog({
        blog_title:req.body.blog_title,
        blog_meta_description:req.body.blog_meta_description,
        blog_description:req.body.blog_description,
        image:image.path,
        status: 1
    })
    AdminBlogs.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_blog')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}


exports.delete_blog=(req,res,next)=>{
    const blogid=req.params.b_id
    AdminBlog.deleteOne({b_id:blogid}).then(deleteblog=>{
        console.log(deleteblog,"delete Image")
        res.redirect('/admin/admin_blog')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}

// blog end

// start gallery

exports.admin_gallery=(req,res,next)=>{
    AdminGallery.find((err,data)=>{
       if(!err){
        AdminvideoGallery.find((err,data1)=>{
            if(!err){
                res.render('admin/admin_gallery',{
                   displaygallerydata:data,
                   displayvideogallerydata:data1
                })     
           }  
        })
       }
           
    })
}


exports.add_gallery=(req,res)=>{
    const image= req.file
    // console.log(image);
    const AdminGallerys = new AdminGallery({
        image:image.path,
        status: 1
    })
    AdminGallerys.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_gallery')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.add_gallery_video=(req,res)=>{
    
    // console.log(image);
    const AdminvideoGallerys = new AdminvideoGallery({
        video:req.body.video_link,
        status: 1
    })
    AdminvideoGallerys.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_gallery')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_gallery=(req,res,next)=>{
    const galleryid=req.params.g_id
    AdminGallery.deleteOne({_id:galleryid}).then(deletegallery=>{
        console.log(deletegallery,"delete Image")
        res.redirect('/admin/admin_gallery')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}

// end gallery

//regisration section start


exports.admin_register=(req,res)=>{
    res.render('admin/add_user')
}
exports.post_register = (req, res) => {
    AdminLogin({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    }).save().then(result => {
        console.log(result);
        res.redirect("/admin/admin_login")
        console.log("Data Added Successfully");
    }).catch(err => {
        console.log(err);
        console.log("Data Not Added");
    })
}


// registration end

// log in start
exports.admin_login=(req,res)=>{
    res.render('admin/login')
}



exports.post_login = (req, res, next) => {
    AdminLogin.findOne({
        email: req.body.loginemail
    }, (err, data) => {
        if (data) {
            if (data.status) {
                const hashPassword = data.password;
                if (bcrypt.compareSync(req.body.password, hashPassword)) {
                    const token = jwt.sign({
                        id: data._id,
                        name:data.name,
                        username: data.username,
                        loginemail: data.email
                    }, "maze@2022", { expiresIn: '10000s' });
                    res.cookie("adminToken", token);
                    console.log(data);
                    res.redirect("/admin");
                    console.log("login successful");
                } else {
                    res.redirect("/admin/admin_login");
                    console.log("password differ");
                }
            } else {
                res.redirect("/admin/admin_login");
                console.log("not verified");
            }
        } else {
            res.redirect("/admin/admin_login");
            console.log("email differ");
        }
    })
}

// login end

//authentication start
exports.adminAuth = (req, res, next) => {
    if (req.user) {
        console.log(req.user);
        next();
    } else {
        console.log(req.user);
        res.redirect("/admin/admin_login");
    }
}
//authentication end

//log out start

exports.admin_logout = (req, res) => {
    res.clearCookie("adminToken")
    res.redirect("/admin/admin_login")
}

// log out end 

// exterior start

exports.admin_exterior=(req,res,next)=>{
    exteriormodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_exterior',{
                displayexteriordata:data
             })     
        }      
    })
}
exports.add_exterior=(req,res)=>{
    const image= req.file
    // console.log(image);
    const exteriormodels = new exteriormodel({
        image:image.path,
        status: 1
    })
    exteriormodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_exterior')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}
exports.delete_exterior=(req,res,next)=>{
    const exteriorid=req.params.e_id
    exteriormodel.deleteOne({e_id:exteriorid}).then(deleteexterior=>{
        console.log(deleteexterior,"delete Image")
        res.redirect('/admin/admin_exterior')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
// exterior end
// interior start


exports.admin_interior=(req,res,next)=>{
    interiormodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_interior',{
                displayinteriordata:data
             })     
        }      
    })
}


exports.add_interior=(req,res)=>{
    const image= req.file
    // console.log(image);
    const interiormodels = new interiormodel({
        image:image.path,
        status: 1
    })
    interiormodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_interior')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_interior=(req,res,next)=>{
    const interiorid=req.params.i_id
    interiormodel.deleteOne({i_id:interiorid}).then(deleteinterior=>{
        console.log(deleteinterior,"delete Image")
        res.redirect('/admin/admin_interior')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
// interior end
//civil work start


exports.admin_civilwork=(req,res,next)=>{
    civilworkmodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_civilwork',{
                displaycivildata:data
             })     
        }      
    })
}

exports.add_civilwork=(req,res)=>{
    const image= req.file
    // console.log(image);
    const civilworkmodels = new civilworkmodel({
        image:image.path,
        status: 1
    })
    civilworkmodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_civilwork')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_civilwork=(req,res,next)=>{
    const civilid=req.params.c_id
    civilworkmodel.deleteOne({i_id:civilid}).then(deletecivil=>{
        console.log(deletecivil,"delete Image")
        res.redirect('/admin/admin_civilwork')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}

// civil work end
// fabricator start

exports.admin_fabricator=(req,res,next)=>{
    fabricatormodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_fabricator',{
                displayfabricatordata:data
             })     
        }      
    })
}

exports.add_fabricator=(req,res)=>{
    const image= req.file
    // console.log(image);
    const fabricatormodels = new fabricatormodel({
        image:image.path,
        status: 1
    })
    fabricatormodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_fabricator')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}


exports.delete_fabricator=(req,res,next)=>{
    const fabricatorid=req.params.c_id
    fabricatormodel.deleteOne({f_id:fabricatorid}).then(deletefabricator=>{
        console.log(deletefabricator,"delete Image")
        res.redirect('/admin/admin_fabricator')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
// fabricator end
//branding start

exports.admin_branding=(req,res,next)=>{
    brandingmodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_branding',{
                displaybrandingdata:data
             })     
        }      
    })
}

exports.add_branding=(req,res)=>{
    const image= req.file
    // console.log(image);
    const brandingmodels = new brandingmodel({
        image:image.path,
        status: 1
    })
    brandingmodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_branding')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_branding=(req,res,next)=>{
    const brandingid=req.params.br_id
    brandingmodel.deleteOne({f_id:brandingid}).then(deletebranding=>{
        console.log(deletebranding,"delete Image")
        res.redirect('/admin/admin_branding')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}

// branding end 
// paste control start 


exports.admin_pastecontrol=(req,res,next)=>{
    pastecontrolmodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_pastecontrol',{
                displaypastecontroldata:data
             })     
        }      
    })
}

exports.add_pastecontrol=(req,res)=>{
    const image= req.file
    // console.log(image);
    const pastecontrolmodels = new pastecontrolmodel({
        image:image.path,
        status: 1
    })
    pastecontrolmodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_pastecontrol')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_pastecontrol=(req,res,next)=>{
    const pasteid=req.params.p_id
    pastecontrolmodel.deleteOne({p_id:pasteid}).then(deletepastecontrol=>{
        console.log(deletepastecontrol,"delete Image")
        res.redirect('/admin/admin_pastecontrol')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
//paste controle end 
// security start

exports.admin_securitysystem=(req,res,next)=>{
    securitymodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_securitysystem',{
                displaysecuritydata:data
             })     
        }      
    })
}


exports.add_securitysystem=(req,res)=>{
    const image= req.file
    // console.log(image);
    const securitymodels = new securitymodel({
        image:image.path,
        status: 1
    })
    securitymodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_securitysystem')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}


exports.delete_securitysystem=(req,res,next)=>{
    const securityid=req.params.s_id
    securitymodel.deleteOne({p_id:securityid}).then(deletesecurity=>{
        console.log(deletesecurity,"delete Image")
        res.redirect('/admin/admin_securitysystem')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
// security end
exports.admin_datanetwork = (req, res) => {
    res.render("admin/admin_datanetwork")
}
//upcoming project start

exports.admin_upcomingproject=(req,res,next)=>{
    upcomingprojectmodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_upcomingproject',{
                displayupcomingprojectdata:data
             })     
        }      
    })
}

exports.add_upcomingproject=(req,res)=>{
    const image= req.file
    // console.log(image);
    const upcomingprojectmodels = new upcomingprojectmodel({
        title:req.body.title,
        description:req.body.description,
        image:image.path,
        status: 1
    })
    upcomingprojectmodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_upcomingproject')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}

exports.delete_upcomingproject=(req,res,next)=>{
    const upcomingprojectid=req.params.br_id
    brandingmodel.deleteOne({u_id:upcomingprojectid}).then(deleteuproject=>{
        console.log(deleteuproject,"delete Image")
        res.redirect('/admin/admin_upcomingproject')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}
//upcoming project end


//partner start

exports.admin_partner=(req,res,next)=>{
    partnermodel.find((err,data)=>{
        if(!err){
             res.render('admin/admin_partner',{
                displaypartnerdata:data
             })     
        }      
    })
}


exports.add_partner=(req,res)=>{
    const image= req.file
    // console.log(image);
    const partnermodels = new partnermodel({
        partner_name:req.body.partner_name,
        partner_position:req.body.partner_position,
        image:image.path,
        status: 1
    })
    partnermodels.save().then((result)=>{
        console.log(result,"add successfully");
        res.redirect('/admin/admin_partner')
    }).catch((err)=>{
        console.log(err,"add failed");
    })
}


exports.delete_partner=(req,res,next)=>{
    const partnerid=req.params.pa_id
    partnermodel.deleteOne({_id:partnerid}).then(deletepartner=>{
        console.log(deletepartner,"delete Image")
        res.redirect('/admin/admin_partner')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}

//partner end
//data network start
// exports.admin_network=(req,res,next)=>{
//     networkmodel.find((err,data)=>{
//         if(!err){
//              res.render('admin/admin_datanetwork',{
//                 displaynetworkdata:data
//              })     
//         }      
//     })
// }


//data network end