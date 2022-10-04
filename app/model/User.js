const con = require('../../config/database');

const create = (req, res) => {
    let data = req.body;

    let sqlQuery = "INSERT INTO users SET ?";

    con.query(sqlQuery,data, function (err, result, fields) {
        if (err) throw res.json({message : err});
         res.json({message : result});
    });
   
}

const getList = (req, res) => {
   
    let sqlQuery = "SELECT * FROM Users";

    con.query(sqlQuery, function (err, result, fields) {
        if (err) throw res.json({message : err});
         res.json({message : result});
    });
   
}

module.exports = {create, getList};