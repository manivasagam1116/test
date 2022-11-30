
const jwt = require('jsonwebtoken')

export class Strat {
  
  static stack=(req,res) =>{
    // console.log("authorization  ==>", req.headers.authorization);
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      //   console.log("token ==>", token)
      const user = jwt.verify(token, 'secretKey');
      console.log("decode ==>", user);
     return user
    } else {
      res.json({ success: false, message: 'unauthorized access!' });
    }
    
  }
}