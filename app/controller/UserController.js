const jwt = require('jsonwebtoken');
const User = require('../model/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


const addUser = async (req, res, next) => {
    try {
      const {name, email, password, role_id} = req.body;

      // validate user input
      if (!(name && email && password && role_id)) {
        return res.status(400).send("All inputs are required");
      }

      // check if user already exist
      const userExist = await User.findOne(email);
      if (userExist.length !=0) {
        return res.send("User already exist");
      }
      
      var encryptedPassword  = bcrypt.hashSync(password, salt);

      // create user
      var userReq = {name : name, email:email, password :encryptedPassword, role_id:role_id };
      User.create(userReq,function(err, content){
        if(err) throw err;
        if(content.insertId){
          console.log("User successfully added.");

          // generate token
          const token = jwt.sign(
            { user_id : content.insertId, email },
            process.env.TOKEN_KEY,
            { expiresIn : "5m"}
          )
          var response = {message:"User successfully added.",token:token};
          return res.send(response);

        } 
        
     });

     
      
    } catch(e){
      console.log(e.message)
    }
}

module.exports = {addUser};