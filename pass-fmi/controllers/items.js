const express = require('express');
const router = express.Router();

const Item = require('../models/items');
const Comment = require('../models/comments');
const User = require('../models/users');
const _ = require('lodash');

router.get('/itemsList', function(req, res) {
  Item.find().deepPopulate('user comments.author').exec(function (err, items) {
    if(items) {
      res.status(200).json(items);
    }
    else {
      res.status(404).send('Items not found!');
    }
  });
});

router.get('/itemsList/:username', function(req, res) {
    Item.find({}, {sort: [['user.username', req.params.username]]}).deepPopulate('user comments.author').exec(function (err, items) {
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
  item.title = req.body.title;
  item.price = req.body.price;
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

router.post('/addComment/:itemId', function(req, res) {
  username = req.body.username;

  User.findOne({username: username}).then((user) => {
    let comment = {};
    comment.author = user._id;
    comment.content = req.body.content;

    Item.findById(req.params.itemId).then((item) => {
      Comment.create(comment).then(comment => {
        item.comments = item.comments.concat(comment._id)

        Item.update({_id: item._id}, item).then((updatedItem) => {
          Item.findById({_id: item._id}).deepPopulate('user comments.author').exec(function (err, item) {
            if(item) {
              res.status(200).json(item);
            }
            else {
              res.status(404).send('Item not found!');
            }
          });
        }).catch((error) => {
          res.status(404).send(error);
        })
      })
    }).catch(() => {
      res.status(404).send('Item doesn\'t exist');
    })
  }).catch(() => {
    res.status(404).send('User not found!');
  })
});

router.put('/:id', function(req,res) {
  Item.findById(req.params.id).then((item) => {
    item.subject = req.body.subject;
    item.price = req.body.price;
    item.title = req.body.title;
    item.department = req.body.department;

    Item.update({_id: item._id}, item).then((updateResponse) => {
      Item.findById({_id: item._id}).deepPopulate('user comments.author').exec(function (err, item) {
        if(item) {
          res.status(200).json(item);
        }
        else {
          res.status(404).send('Item not found!');
        }
      });
    }).catch((error) => {
      res.status(404).send(error);
    })
  })
});

router.delete('/deleteComment/:itemId/:commentId', function(req, res) {
  var commentId = parseInt(req.params.commentId);

  Item.findById(req.params.itemId).then((item) => {
      Comment.deleteOne({ _id: commentId}).then(result => {
        item.comments = _.without(item.comments, commentId);

        Item.update({_id: item._id}, item).then((updatedItem) => {
          Item.findById({_id: item._id}).deepPopulate('user comments.author').exec(function (err, item) {
            if(item) {
              res.status(200).json(item);
            }
            else {
              res.status(404).send('Item not found!');
            }
          });
        }).catch((error) => {
          res.status(404).send(error);
        })
      })
    }).catch(() => {
      res.status(404).send('Item doesn\'t exist');
    })
});

router.get('/:id', function(req, res) {
  Item.findById({_id: req.params.id}).deepPopulate('user comments.author').exec(function (err, item) {
    if(item) {
      res.status(200).json(item);
    }
    else {
      res.status(404).send('Item not found!');
    }
  });
});

module.exports = router;
