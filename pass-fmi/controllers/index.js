const express = require('express');
const router = express.Router();

router.use('/users', require('./users.js'));

router.get('/', function(req, res) {
  res.send('Home page');
});

module.exports = router;
