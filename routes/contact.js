var router = require("express").Router();
<<<<<<< HEAD
var nodemailer = require('nodemailer');
require('dotenv').config()
=======
var nodemailer = require("nodemailer");
require('dotenv').config();
>>>>>>> 59086e243ef25dd8a3f8e98723006f597d52069e


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


router.post("/sent", (req, res) => {

  
    // sender til mig
    var mailOptions = {
        from: 'testeskea@gmail.com',
        to: 'omar.iatik@gmail.com',
        subject: "Emne: " + req.body.subject + ", " + "Afsender: " + req.body.name,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    });
    

    // sender bekræftelse til personen

    var mailOptions = {
        from: 'testeskea@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: 'Tak for at du har kontaktet Node Leasing \n\nVi vender tilbage hurtigst muligt'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    
    });

    res.redirect("/#kontakt");
});


module.exports = {
    router
};