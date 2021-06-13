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










module.exports = {
    router
};