const express = require('express')
const cors = require('cors')
const usersroutes = require('./routes/users');
const auth = require("./middleware/auth");
const logger = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

//Port
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({  extended: true  }))


//Api
app.get('/', (request, response) => {
    response.json({ info: 'JWT, Express API' })
  })

  app.get("/results", auth, (req, res) => {
    console.log(req.user.decoded)
    res.status(200).send("PASSED");
  });

// Routes
app.use('/api', usersroutes);


// Error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//Listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })