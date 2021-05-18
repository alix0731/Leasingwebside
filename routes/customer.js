var router = require("express").Router();
var db = require("./db.js");

router.post("/addcustomer", (req, res) => {
    const customer = req.body;
   
    console.log(customer);

    
    db.connection.query("INSERT INTO customer(firstname, lastname, email, phone, address) Values(?, ?, ?, ?, ?)", [customer.firstname, customer.lastname, customer.email, customer.phone, customer.address], (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log("customer created");
            res.redirect("/bestilling");
            
        }
    });


    //get car price
    let monthly_price = 0;
    db.connection.query("SELECT * FROM cars where id = ?", [customer.car_id], (error, rows, fields)=> {
        if (error) {
            console.log(error);
        }
        else{
            const monthly = rows[0].price;
          
            //Nested query
            // grunden til dette er at vi henter prisen for bilen fra databasen og indsætter i tabellen order
            // get date for order
            const date = new Date();
            const today =  date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            console.log(today);

            db.connection.query("INSERT INTO orders(monthly_payment, order_date, start_date, end_date, customer_id, car_id) Values(?, ?, ?, ?, ?, ?)", [monthly, today  , customer.start_date, customer.end_date, 1, customer.car_id], (error, rows, fields) => {
                if (error) {
                     console.log(error);
                } else {
                      console.log("order created");
                 }
            });

        }
    });






    
});


module.exports = {
router
};