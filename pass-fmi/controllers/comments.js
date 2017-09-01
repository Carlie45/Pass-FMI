const express = require('express');
const router = express.Router();

const Comment = require('../models/comments');
const Item = require('../models/items');

router.get('/commentsList', function(req, res) {
  Comment.find({}).then((comments) => {
    res.status(200).json(comments);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

module.exports = router;
