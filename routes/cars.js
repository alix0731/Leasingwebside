const router = require("express").Router();
var db = require("/Users/alirazaakhtar/Desktop/Leasingwebside/db.js");





router.get("/allcars", (req, res) => {
    db.connection.query("SELECT * FROM cars", (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Query sent");
            res.send(rows);
        }
    });

    
});










module.exports = {
    router
};