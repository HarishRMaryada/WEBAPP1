const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
//custom middleware
const logger = require('./MiddleWare/logger-middleware')

var app = express()

app.set('port',process.env.PORT||7979)


app.use(cookieParser())

//parse application /www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

logger(app)


app.post('/',(req,res)=>{
  //console.log(req.params)
  console.log(req.body)
  res.json(req.body)
})

//404 Error
app.use(function(req,res) {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})


// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' )
});
