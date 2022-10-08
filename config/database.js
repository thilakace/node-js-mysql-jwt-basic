var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "ecom"
});

con.connect(function(err) {
  if(err){
    console.log({message : "Error in DB Connection" ,code : err.code, errno : err.errno});
    return;
  }
  console.log("Connected!");
});

module.exports = con;

