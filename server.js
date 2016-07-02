// Get the packages we need
var express = require('express')
var bodyParser = require('body-parser')
// Create our Express application
var app = express()

// Create our Express router
var router = express.Router()

// Use the body-parser package in our application
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  type: 'application/json',
  extended: true
}))

// Register all our routes with /api
app.use('/api', router)

// Start the server
if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}

router.post('/submit', (req, res) => {
  res.send({message: 'This is working', body: req.body})
  console.log('this works')
  console.log(req.body)
})
