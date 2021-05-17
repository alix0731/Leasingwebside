var router = require("express").Router();
var db = require("/Users/alirazaakhtar/Desktop/Leasingwebside/db.js");

router.post("/addcustomer", (req, res) => {
    const customer = req.body;
   

    db.connection.query("INSERT INTO customer(firstname, lastname, email, phone, address) Values(?, ?, ?, ?, ?)", [customer.firstname, customer.lastname, customer.email, customer.phone, customer.address], (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log("customer created");
            res.redirect("/bestilling");
        }
    });

    
});


module.exports = {
router
};