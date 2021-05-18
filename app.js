const { error } = require("console");
const { static } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;





app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const contactRouter = require("./routes/contact.js");
const customerRouter = require("./routes/customer.js");
const carsRouter = require("./routes/cars.js");
app.use(contactRouter.router);
app.use(customerRouter.router);
app.use(carsRouter.router);


//header
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
//footer
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");


//homepage
const home = fs.readFileSync(__dirname + '/public/frontpage/home.html', "utf-8");
//about
const about = fs.readFileSync(__dirname + '/public/about/about.html', "utf-8");
//cars
const cars = fs.readFileSync(__dirname + "/public/cars/cars.html", "utf-8");
//create car
const addcar = fs.readFileSync(__dirname + "/public/cars/create.html", "utf-8");
//edit car
const editcar = fs.readFileSync(__dirname + "/public/cars/edit.html", "utf-8");

//order
const order = fs.readFileSync(__dirname + "/public/cars/order.html", "utf-8");
const payment = fs.readFileSync(__dirname + "/public/payment/payment.html", "utf-8");
//contact
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");



//home
app.get("/", (req, res) => {
    res.send(header + home + footer);
});

//about
app.get("/about", (req, res) => {
    res.send(header + about + footer);
});

//biler
app.get("/biler", (req, res) => {
    res.send(header + cars + footer);
});

app.get("/bestilling", (req, res) => {
    res.send(header + order + footer);
});

app.get("/opretbil", (req, res) => {
    res.send(header + addcar + footer);
});

app.get("/redigerebiler", (req, res) => {
    res.send(header + editcar +  footer);
});

app.get("/betalling", (req, res) => {
    res.send(header + payment + footer);
});

//kontakt
app.get("/kontakt", (rew, res) => {
    res.send(header + contact + footer);
});



app.listen(PORT, (error)=>{
    if (error) {
     console.log(error);
    }
    else{
    console.log("Server running on port", PORT);
    }
});