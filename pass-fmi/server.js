const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connect = require('connect')
const app = express();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const assert = require('assert');


mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

var expressSession = require('express-session');
app.use(expressSession({secret: 'lkajsdlkajsdljasdlkj123kas', keys: ['asdasd','2aslhdasd1']}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', [
    'Accept',
    'Accept-Encoding',
    'Authorization',
    'Content-Type',
    'X-HTTP-Method-Override',
    'X-Requested-With',
  ].join(', '));

  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  next();
});

// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
var User = require('./models/users');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/api', require('./controllers'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (config.env !== 'production') ? err : {},
    title: 'error',
  });
});

app.listen(9000, function() {
  console.log('Example app listening on port 9000!');
});
