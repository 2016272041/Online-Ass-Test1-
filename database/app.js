var express = require ('express')
var app = express()
var mysql = require('mysql')
/** 
 * This middle level of middleware function 
 * for MySQL connections during request/response life cycle
*/

var myConnection = require('express-myconnection')

var config = require('./config')
var dbOptions = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.db
}

/** 
 * three strategis common database access function 
 * pool creations functions connections
 * new functions access
*/

app.use(myConnection(mysql, dbOptions, 'pool'))

/** 
 * setting up form templating view engines 
*/
app.set('view engine', 'ejs')

/** 
 * import data/config function
 * post data actions
 * default function routes
*/

var config = require('./config')
var post = require('./post')
var routes = require('./routes')
var company = require('../src/app/company')
var quiz = require('../src/app/quiz')
var questions = require('../src/app/questions')
var tests = require('../src/app/tests')

/** 
 * express validation middleware form validation
 * validation function creates form  
*/

var expressValidator = require('express-validator')
app.use(expressValidator())

/** 
 * body-parser module is used to read HTTP POST data
 * express middleware that reads function input 
*/

var bodyParser = require ('body-parser')
/** 
 * bodyparser.urlencoded() parse function the text URL encoded functions
*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/** 
 * HTTP module let us use HTTP verbs as PUT or DELETE 
*/
var methodOverride = require('method-override')

/** 
 * using custom logic to override method
 * there are other ways of overriding as well
*/

app.use(methodOverride(function (req, res) {
    if(req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

/** 
 * this module shows flash messages 
 * generally used to show success or error msg
 * Flash messages are stored in session
*/

var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser('keyboard cat'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash())

app.use('./src/app/tests', tests)
app.use('./src/app/company', company)
app.use('./src/app/questions', questions)
app.use('./src/app/quiz', quiz)

app.listen(3000, function(){
    console.log('server running at port 3000: http://127.0.0.1:3000')
})