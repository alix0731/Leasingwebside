const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
});


app.listen(8080, (error)=>{
    if (error) {
     console.log(error);
    }
    else{
    console.log("Server running on port", 8080);
    }
});