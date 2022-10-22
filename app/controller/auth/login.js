const jwt = require('jsonwebtoken');
const User = require('../../model/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const doLogin = async(req, res) => {

  try{
    const {email, password} = req.body;
    
    if (!(email && password)){
      return res.send({status:"error", message:"Validation error"});
    }

    const user = await User.findOne(email);
    if (user.length ==0){
      return res.send({status:"error", message:"Invalid email!"});
    }
    const dbpassword = user[0].password;
  
    var check = bcrypt.compareSync(password, dbpassword); // true
    
    if(check) {
       // generate token
       const token = jwt.sign(
        { user_id : user[0].id, email },
        process.env.TOKEN_KEY,
        { expiresIn : "5m"}
      )
     return res.json({status:"success", message: "Success", token : token});
    }else{
      return res.send({status:"error", message:"Wrong password!"});
    }

     

    //console.log(user);

  } catch (err) {
    console.log(err.message)
  }
   
   

}

module.exports = {doLogin};