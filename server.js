const express=require('express');
const path=require('path')
const ejs=require('ejs')
const mongoose=require('mongoose')
const session =require('express-session')
const cookiparser = require("cookie-parser");
const flash = require("connect-flash");
//stape1 file upload
const multer=require('multer')
const app=express();


app.use(session({
    secret:'secrect',
    cookie:{maxAge:600000},
    resave:false,
    saveUninitialized:false
}))


app.use(flash());
app.use(cookiparser());


app.use(express.urlencoded({
    extended: true
}));

 //create a static folder
 app.use(express.static(path.join(__dirname,'public')))

 //stape2 fileupload
app.use('/upload',express.static(path.join(__dirname,'upload')));


//stape3
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
//stape4 file type
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.includes("png") ||
    file.mimetype.includes("jpg") ||
    file.mimetype.includes("jpeg")){
        cb(null,true)
    }
    else{
        cb(null,false)
    }    
} 
//stape5 file upload
app.use(multer({storage:fileStorage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('image'))


app.set('view engine','ejs')
app.set('views','views')

const AdminAuth=require('./middleware/adminloginauth')
app.use(AdminAuth.authJwt)


//define route
const Route=require('./route/home_route')
app.use(Route)


const adminRoute=require('./route/admin_route')
app.use('/admin',adminRoute)

const dbdriver ="mongodb+srv://Vivid_Design:v1IE1o9RRokR5Iio@cluster0.sfxmn99.mongodb.net/vivid_design"
//define port
const port=process.env.PORT || 2037
mongoose.connect(dbdriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    app.listen(port,()=>{
        console.log(`server sunning at http://localhost:${port}`);
        console.log(`Database connected`);
    })
}).catch(err=>{
    console.log(`connection failed`);
})



