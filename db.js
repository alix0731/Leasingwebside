const mysql = require("mysql");


const connection = mysql.createConnection({
host: "den1.mysql3.gear.host",
user: "nodeleasing", 
password: 	"Su0vU9~v_Y1v",
database: "nodeleasing"
});

module.exports = {
    connection
};