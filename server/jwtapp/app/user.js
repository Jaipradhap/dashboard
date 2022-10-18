const jsonwebtoken = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()




const logins = (request, response) => {

  try {
    const { email, password } = request.body;

    if (!(email && password)) {
      response.status(400).send("All input is required");
    }

    if (email === "admin@gmail.com" && password === "admin2022#1") {
      return response.status(200).json({
        token: jsonwebtoken.sign({ user: email }, process.env.JWT_SECRET),
      });
    }

  }
  catch (err) {
    response.status(400).json('error')
  }
}


  module.exports = {
    logins
  }

