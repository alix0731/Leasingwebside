const router = require("express").Router();

const nodemailer = require('nodemailer');

require("dotenv").config();




var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'keatestes@gmail.com',
        pass: 'kea12345'
    }
});


router.post("/sent", (req, res) => {

  
    // sender til mig
    var mailOptions = {
        from: 'keatestes@gmail.com',
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
        from: 'keatestes@gmail.com',
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