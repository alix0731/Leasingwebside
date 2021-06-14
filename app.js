const { error } = require("console");
const { static } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;



app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



//const livechatRouter = require("./routes/livechat.js")
const contactRouter = require("./routes/contact.js");
const customerRouter = require("./routes/customer.js");
const carsRouter = require("./routes/cars.js");
const bookingRouter = require("./routes/booking.js");
app.use(contactRouter.router);
app.use(customerRouter.router);
app.use(carsRouter.router);
app.use(bookingRouter.router);



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
//edit car by id
const editcarbyid = fs.readFileSync(__dirname + "/public/cars/editcar.html", "utf-8");

//customers
const customers = fs.readFileSync(__dirname + "/public/customers/customers.html", "utf-8");

//booking
const booking = fs.readFileSync(__dirname + "/public/booking/booking.html", "utf-8");

//order
const order = fs.readFileSync(__dirname + "/public/cars/order.html", "utf-8");
const payment = fs.readFileSync(__dirname + "/public/payment/payment.html", "utf-8");
//contact
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const confirmation = fs.readFileSync(__dirname + "/public/contact/confirmation.html", "utf-8");
//livechat
const livechat = fs.readFileSync(__dirname + "/public/livechat/livechat.html", "utf-8");



//home
app.get("/", (req, res) => {
    res.send(header + home + footer);
});

//about
app.get("/aboutus", (req, res) => {
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

app.get("/redigerid", (req, res) =>{
  res.send(header + editcarbyid + footer);
});

app.get("/betalling", (req, res) => {
    res.send(header + payment + footer);
});

//Customers
app.get("/kunder", (req, res) => {
  res.send(header + customers + footer);
});

app.get("/bestillinger", (req, res) => {
  res.send(header + booking + footer);
});

//kontakt
app.get("/kontakt", (req, res) => {
    res.send(header + contact + footer);
});
app.get("/confirmation", (req, res) => {
    res.send(header + confirmation + footer);
});

//livechat
app.get("/livebesked", (req, res) => {
    res.send(header + livechat + footer);
})




//Livechat Start
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });
  
  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
  
  io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
  

//Livechat slut





server.listen(PORT, (error)=>{
    if (error) {
     console.log(error);
    }
    else{
    console.log("Server running on port", PORT);
    }
});

