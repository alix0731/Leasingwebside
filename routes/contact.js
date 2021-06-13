const router = require("express").Router();

const nodemailer = require('nodemailer');

require("dotenv").config();




var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


router.post("/sent", (req, res) => {

  
    // sender til mig
    var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.MAILRECIEVE,
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
        from: process.env.EMAIL,
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

    res.redirect("/confirmation");
});


module.exports = {
    router
};