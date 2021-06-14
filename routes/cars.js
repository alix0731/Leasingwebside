const router = require("express").Router();
const db = require("./db.js");





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

router.post("/addcar", (req, res) => {
    const car = req.body;

    db.connection.query("INSERT INTO cars(name, model, km, price, year, img) VALUES(?, ?, ?, ?, ?, ?)", [car.name, car.model, car.km, car.price, car.year, car.img], (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log("car added");
            res.redirect("/biler");
        }
    });
});

router.get("/getcar/:id", (req, res ) =>{
   db.connection.query("SELECT * FROM cars WHERE ID = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            console.log("car is called");
            res.send({data:rows[0]})
        }
   });
});

router.get("/delete/:id", (req, res)=> {
    db.connection.query("DELETE FROM cars WHERE ID = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error)
        }else{
            console.log("car is deleted");
            res.redirect("/redigerebiler")
        }
    })
})









module.exports = {
    router
};