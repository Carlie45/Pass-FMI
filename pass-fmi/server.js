const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

var mongoose = require('mongoose');
mpromise = require('mpromise');
const assert = require('assert');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));


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
