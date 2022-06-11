const express=require('express')
const Route=express.Router()
const adminController=require('../controller/admincontroller')
const adminauth = require('../middleware/adminloginauth')

Route.get('/',adminController.adminAuth,adminController.indexadmin)

//blog start
Route.get('/admin_blog',adminController.adminAuth,adminController.admin_blog)
Route.post('/add_blog',adminController.add_blog)
Route.get('/delete_blog/:b_id',adminController.delete_blog)
// blog end
//gallery start
Route.get('/admin_gallery',adminController.adminAuth,adminController.admin_gallery)
Route.post('/add_gallery',adminController.add_gallery)
Route.post('/add_gallery_video',adminController.add_gallery_video)
Route.get('/delete_gallery/:g_id',adminController.delete_gallery)
//gallery end
//register start
Route.get('/admin_registration',adminController.admin_register)
Route.post('/post_registration', [adminauth.checkDuplicateEntries],adminController.post_register)
//register end
//login start

Route.get('/admin_login',adminController.admin_login)
Route.post('/post_login',adminController.post_login)
//login end
//log out start
Route.get('/admin_logout',adminController.admin_logout)
//log out end

// exterior start 
Route.get('/admin_exterior',adminController.adminAuth,adminController.admin_exterior)
Route.post('/add_exterior',adminController.add_exterior)
Route.get('/delete_exterior/:e_id',adminController.delete_exterior)
// end exterior
// start enterior
Route.get('/admin_interior',adminController.adminAuth,adminController.admin_interior)
Route.post('/add_interior',adminController.add_interior)
Route.get('/delete_interior/:i_id',adminController.delete_interior)
// end interior
// civil work start
Route.get('/admin_civilwork',adminController.adminAuth,adminController.admin_civilwork)
Route.post('/add_civilwork',adminController.add_civilwork)
Route.get('/delete_civilwork/:c_id',adminController.delete_civilwork)
//civil work end
// fabricator start
Route.get('/admin_fabricator',adminController.adminAuth,adminController.admin_fabricator)
Route.post('/add_fabricator',adminController.add_fabricator)
Route.get('/delete_fabricator/:f_id',adminController.delete_fabricator)
//fabricator end
//branding start
Route.get('/admin_branding',adminController.adminAuth,adminController.admin_branding)
Route.post('/add_branding',adminController.add_branding)
Route.get('/delete_branding/:br_id',adminController.delete_branding)
//branding end
//paste control start
Route.get('/admin_pastecontrol',adminController.admin_pastecontrol)
Route.post('/add_pastecontrol',adminController.add_pastecontrol)
Route.get('/delete_pastecontrol/:p_id',adminController.delete_pastecontrol)
// paste control end
//security control start
Route.get('/admin_securitysystem',adminController.admin_securitysystem)
Route.post('/add_securitysystem',adminController.add_securitysystem)
Route.get('/delete_securitysystem/:s_id',adminController.delete_securitysystem)
//security control end
//dat network start
Route.get('/admin_datanetwork',adminController.admin_datanetwork)
// Route.get('/add_datanetwork',adminController.add_datanetwork)
// Route.get('/delete_datanetwork',adminController.delete_datanetwork)
//data network end
// upcoming project start
Route.get('/admin_upcomingproject',adminController.adminAuth,adminController.admin_upcomingproject)
Route.post('/add_upcomingproject',adminController.add_upcomingproject)
Route.get('/delete_upcomingproject/:u_id',adminController.delete_upcomingproject)
//upcoming project end
//partner start
Route.get('/admin_partner',adminController.adminAuth,adminController.admin_partner)
Route.post('/add_partner',adminController.add_partner)
Route.get('/delete_partner/:pa_id',adminController.delete_partner)

//partner end
//datanetwork start


//datanetwork end




module.exports= Route;