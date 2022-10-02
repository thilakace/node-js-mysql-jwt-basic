//const dbConnection = require('../../config/database');
const User = require('../model/User');

const addUser = (req, res, next) => {
    res.send(User.create);
   // res.json({message : User.create});
}

module.exports = {addUser};