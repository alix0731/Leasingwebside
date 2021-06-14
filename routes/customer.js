const router = require("express").Router();
const db = require("./db.js");

router.get("/getcustomers", (req, res) =>{
    db.connection.query("SELECT * FROM customer", (error, rows, fields) =>{
        if (error) {
            console.log(error);
        } else {
            console.log("Customers recieved");
            res.send(rows);
        }
    });
});

router.get("/deletecustomer/:id", (req, res)=> {
    db.connection.query("DELETE FROM customer WHERE ID = ?", [req.params.id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            console.log("customer is deleted");
            res.redirect("/kunder");
        }
    });
});

router.post("/addcustomer", (req, res) => {
    const customer = req.body;
   
    console.log(customer);

    
    db.connection.query("INSERT INTO customer(firstname, lastname, email, phone, address) Values(?, ?, ?, ?, ?)", [customer.firstname, customer.lastname, customer.email, customer.phone, customer.address], (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log("customer created");
            res.redirect("/confirmation");
            
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
            db.connection.query("SELECT * FROM customer where email = ?", [customer.email], (error, rows, fields) => {
                if (error) {
                    console.log(error);
                }
                else{
                    const customer_id = rows[0].id;
                  
          
                    //Nested query
                    // grunden til dette er at vi henter prisen for bilen fra databasen og indsætter i tabellen order
                    // get date for order
                    const date = new Date();
                    const today =  date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                    console.log(today);
        
                    db.connection.query("INSERT INTO orders(monthly_payment, order_date, start_date, end_date, customer_id, car_id) Values(?, ?, ?, ?, ?, ?)", [monthly, today  , customer.start_date, customer.end_date, customer_id, customer.car_id], (error, rows, fields) => {
                        if (error) {
                             console.log(error);
                        } else {
                              console.log("order created");
                         }
                    });
                }
            });
           

        }
    });

       
});





module.exports = {
router
};