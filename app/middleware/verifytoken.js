const jwt = require("jsonwebtoken");
const config = process.env;


const verifyToken = (req, res, next) => {
    try { 
      var token = req.headers.authorization;

      if (req.headers.authorization == undefined) {
        var err = new Error('Token Missing');
                err.status = 401;
                return next(err);
         
      }else{
        var token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log(decoded);
        return next();
      }
    } catch (error) {
       return next(error);
    }  
     
    
}

module.exports = verifyToken;