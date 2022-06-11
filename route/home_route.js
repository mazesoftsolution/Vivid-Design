const express=require('express')
const Route=express.Router()
const HomeController=require('../controller/HomeController')

Route.get('/',HomeController.index)
Route.get('/about',HomeController.about)
Route.get('/branding',HomeController.branding)
Route.get('/upcomming_projects',HomeController.upcomming_projects)
Route.get('/security_systemlock',HomeController.security_systemlock)
// Route.get('/data_networking',HomeController.data_networking)
// Route.get('/photo_video',HomeController.photo_video)
Route.get('/blog',HomeController.blog)
Route.get('/gallary',HomeController.gallary)
// Route.get('/video',HomeController.video)
Route.get('/home_interior',HomeController.home_interior)
Route.get('/home_exterior',HomeController.home_exterior)
Route.get('/civil_work',HomeController.civil_work)
Route.get('/fabricator',HomeController.fabricator)
Route.get('/paste_control',HomeController.paste_control)
Route.post('/add_contact',HomeController.add_contact)




module.exports=Route