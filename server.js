var express = require('express');
var session = require('express-session');
var static = require('node-static');
const router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf')
var all_route = require('./router/router');

//.ENV Variable
require('dotenv').config();
const port = process.env.PORT;
const fs = require('fs')
const path = require('path')
const httpolyglot = require('httpolyglot')
const https = require('https')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs,html');
app.set('views', './views');
app.use(express.static(path.join(__dirname,'public')));
//Body Parser
var csrfProtection = csrf({ cookie: false })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//express session
app.set('trust proxy', 1)
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
   cookie: { secure: false }
        // cookie: { maxAge: 60000 }
}));

app.use('/',router);
all_route(router);
app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));
app.listen(port);
console.log(`Starting Frontend at port ${port}`+` Node.JS`);