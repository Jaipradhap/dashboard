const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()



const verifyToken = (req, res, next) => {

  //get token from request header
const authHeader = req.headers["authorization"]
const token = authHeader.split(" ")[1]

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;