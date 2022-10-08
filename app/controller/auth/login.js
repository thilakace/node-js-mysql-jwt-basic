const jwt = require('jsonwebtoken');
const User = require('../../model/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const doLogin = async(req, res) => {

  try{
    const {email, password} = req.body;
    
    if (!(email && password)){
      return res.send({message:"Validation error"});
    }

    const user = await User.findOne(email);
    console.log(password);
    var hash = bcrypt.hashSync(password, salt);
    
    var check = bcrypt.compareSync("test01", hash); // true
    console.log(check);
    if(user && check) {
       // generate token
       const token = jwt.sign(
        { user_id : user.id, email },
        process.env.TOKEN_KEY,
        { expiresIn : "5m"}
      )
     return res.status(200).json({message: "Success", token : token});
    }else{
      return res.send({message:"Email or password wrong!"});
    }

     

    //console.log(user);

  } catch (err) {
    console.log(err.message)
  }
   
   

}

module.exports = {doLogin};