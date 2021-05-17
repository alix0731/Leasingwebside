const { static } = require("express");
const express = require("express");
const app = express();



const fs = require("fs");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const contactRouter = require("./routes/contact.js");

app.use(contactRouter.router);


//header
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
//footer
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");


//homepage
const home = fs.readFileSync(__dirname + '/public/frontpage/home.html', "utf-8");
//cars
const cars = fs.readFileSync(__dirname + "/public/cars/cars.html", "utf-8");
//contact
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");




app.get("/", (req, res) => {
    res.send(header + home + footer);
});

app.get("/biler", (req, res) => {
    res.send(header + cars + footer);
});

app.get("/kontakt", (rew, res) => {
    res.send(header + contact + footer);
});



app.listen(8080, (error)=>{
    if (error) {
     console.log(error);
    }
    else{
    console.log("Server running on port", 8080);
    }
});