const dbConnection = require('../../config/database');

const create = (req, res, next) => {

    
    res.json({message : "New user Created from model"});
}

module.exports = {create};