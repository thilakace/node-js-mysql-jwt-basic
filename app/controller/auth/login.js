const con = require("../../../config/database");

const doLogin = (req, res) => {
   console.log(req.body);
   let query = "SELECT * from users where email='"+req.body.email+ "' and password="+req.body.password+" and status=1";

   con.query(query, function(err, result, fields){
     if(err) throw res.json({message:err});
     res.json({message : result});
   })

}

module.exports = {doLogin};