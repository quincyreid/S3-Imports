var express = require('express')
var bodyParser = require('body-parser')
var AWS = require('aws-sdk')
var app = express()
var router = express.Router()
var s3 = new AWS.S3()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  type: 'application/json',
  extended: true
}))

app.use('/api', router)

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}

router.post('/submit', (req, res) => {
  res.send({message: 'This is working', body: req.body})
  var thisBody = JSON.stringify(req.body)
  var params = {
    Bucket: 'contact-lists',
    Key: 'my-recent-contacts',
    Body: thisBody
  }
  s3.putObject(params, (err, data) => {
    if (err) return err
    console.log('Successfully uploaded data')
  })
})

module.exports = app
