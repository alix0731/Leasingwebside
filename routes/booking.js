const router = require("express").Router();
const db = require("./db.js");

router.get("/getbookings", (req, res) =>{
    db.connection.query("SELECT * FROM orders", (error, rows, fields) =>{
        if (error) {
            console.log(error);
        } else {
            console.log("Bookings recieved");
            res.send(rows);
        }
    });
});

router.get("/deletebookings/:id", (req, res)=> {
    db.connection.query("DELETE FROM orders WHERE ID = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            console.log("booking is deleted");
            res.redirect("/bestillinger");
        }
    });
})

module.exports = {
    router
    };