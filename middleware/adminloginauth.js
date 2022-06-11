const AdminLogin = require('../model/adminregister')


 exports.checkDuplicateEntries = (req, res, next) => {
 
    AdminLogin.findOne({
            email: req.body.email
        }).exec((err, email) => {
            if (err) {
                console.log(err);
                return;
            }
            if (email) {
                req.flash("message", "Username Already Exists");
                req.flash("alert", "alert-danger");
                return res.redirect("admin_registration");

                console.log("Email already exist...");
                // return;
            }
            const password = req.body.password;
            const confirm = req.body.cpassword;
            if (password !== confirm) {

                return res.redirect("admin_registration");
            }
            next();
            // next();

        })
    }



const jwt = require("jsonwebtoken");
exports.authJwt = (req, res, next) => {
    if (req.cookies && req.cookies.adminToken) {
        jwt.verify(req.cookies.adminToken,"maze@2022", (err, data) => {
            req.user = data
            next()
        })
    } else {
        next()
    }
}
