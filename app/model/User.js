const con = require('../../config/database');

const create = (userReq, callback) => {
    

    let sqlQuery = "INSERT INTO users SET ?";

    con.query(sqlQuery,userReq, function (err, result, fields) {
        if (err) throw callback(err, null);
         callback(null,result)
    });
   
}

const getList = (req, res) => {
   
    let sqlQuery = "SELECT name,email FROM Users";

    return new Promise((resolve, reject) => {
      con.query(sqlQuery, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });
    });

    
   
}

const findOne = (email,callback) => {
    let sqlQuery = "SELECT * FROM Users WHERE email=?";

    return new Promise((resolve, reject) => {
        con.query(sqlQuery,[email], (err, result) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(result);
          }
        });
      });

   
}



module.exports = {create, getList, findOne};