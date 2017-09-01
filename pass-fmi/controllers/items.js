const express = require('express');
const router = express.Router();

const Item = require('../models/items');
const Comment = require('../models/comments');
const User = require('../models/users');
const _ = require('lodash');
const Joi = require('joi');

const testSchema = Joi.object().keys({
  user: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.number().integer(),
  email: Joi.string().email()
});

const newItemSchema = Joi.object().keys({
  user: Joi.string().alphanum().min(3).max(30).required(),
  subject: Joi.string().required(),
  department: Joi.string().required(),
  title: Joi.string().min(3).max(30).required(),
  price: Joi.number().precision(2).required()
});

const editItemSchema = Joi.object().keys({
  user: Joi.object().required(),
  subject: Joi.string().required(),
  department: Joi.string().required(),
  title: Joi.string().min(3).max(30).required(),
  price: Joi.number().precision(2).required()
});

const newCommentSchema = Joi.object().keys({
  author: Joi.object().required(),
  content: Joi.string().required(),
});

router.post('/test', function(req, res) {
  let object = {};
  object.user = req.body.user;
  object.email = req.body.email;
  object.phone = req.body.phone;
  const result = Joi.validate(object, testSchema);

  if (result.error) {
    res.status(404).json({message: result.error.details[0].message})
    return;
  }
  res.status(200).json(result);
  return;
});

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

  const validation = Joi.validate(item, newItemSchema);
  if (validation.error) {
    res.status(404).json({message: validation.error.details[0].message})
    return;
  }

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

    const validation = Joi.validate(comment, newCommentSchema);
    if (validation.error) {
      res.status(404).json({message: validation.error.details[0].message})
      return;
    }

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

    const validation = Joi.validate(item, editItemSchema);
    if (validation.error) {
      res.status(404).json({message: validation.error.details[0].message})
      return;
    }

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
  var itemId = req.params.itemId

  if (!commentId || !itemId) {
    res.status(404).json({message: 'Pass correct item id and comment id'})
    return;
  }

  Item.findById(itemId).then((item) => {
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
      res.status(404).send({message: 'Item not found!'});
    }
  });
});

module.exports = router;
