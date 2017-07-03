const express = require('express');
const router = express.Router();

const Item = require('../models/items');
const Comment = require('../models/comments');
const User = require('../models/users');

router.get('/itemsList', function(req, res) {
  Item.find().deepPopulate('comments.author').exec(function (err, items) {
    if(items) {
      res.status(200).json(items);
    }
    else {
      res.status(404).send('Items not found!');
    }
  });
});

router.post('/', function(req, res) {
  let item = {};

  item.user = req.body.userId;
  item.subject = req.body.subject;
  item.department = req.body.department;
  item.comments = [];

  Item.create(item).then(item => {
    res.status(200).json(item);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});


router.get('/departments',function(req, res){
  Item.find().distinct('department', {}).then(departments => {
    if (departments) {
      res.status(200).json(departments);
    }
    else {
      res.status(500).send('Error');
    }
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

router.get('/subjects',function(req, res){
  Item.find().distinct('subject', {}).then(subjects => {
    if (subjects) {
      res.status(200).json(subjects);
    }
    else {
      res.status(500).send('Error');
    }
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

router.get('/:id', function(req, res) {
  Item.findById({_id: req.params.id}).deepPopulate('comments.author').exec(function (err, item) {
    if(item) {
      res.status(200).json(item);
    }
    else {
      res.status(404).send('Item not found!');
    }
  });
});

module.exports = router;
