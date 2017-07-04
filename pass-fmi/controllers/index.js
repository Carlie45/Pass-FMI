const express = require('express');
const router = express.Router();

router.use('/users', require('./users.js'));
router.use('/comments', require('./comments.js'));
router.use('/items', require('./items.js'));

router.get('/', function(req, res) {
  res.send('Home page');
});

module.exports = router;
