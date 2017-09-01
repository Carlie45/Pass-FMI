const express = require('express');
const router = express.Router();

const passport = require('passport');
const User = require('../models/users');
const Joi = require('joi');

const addUserSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  role: Joi.string().required(),
  phone: Joi.number().integer(),
  password: Joi.string().min(3).max(40).required(),
  email: Joi.string().email()
});

router.get('/usersList', function(req, res) {
  User.find({}).then((users) => {
    res.status(200).json(users);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

router.post('/', function(req, res) {
  const validation = Joi.validate({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    phone: req.body.phone,
    password: req.body.password,
    email: req.body.email
  }, addUserSchema);
  if (validation.error) {
    res.status(404).json({message: validation.error.details[0].message})
    return;
   }

   let user = new User();

  user.username = req.body.username;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.role = req.body.role;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save().then( user => {
   res.status(200).json(user);
  })
  .catch(error => {
   res.status(500).send(error);
  });

});

router.get('/:username', function(req, res) {
  User.findOne({username: req.params.username})
    .then(user => {
      if(user) {
        res.status(200).json(user);
      }
      else {
        res.status(404).send('User not found!');
      }
    })
    .catch(error => {
      res.status(404).send('error');
    });
});

router.post('/register', function(req, res) {
  const validation = Joi.validate({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    phone: req.body.phone,
    password: req.body.password,
    email: req.body.email
  }, addUserSchema);
  if (validation.error) {
    res.status(404).json({message: validation.error.details[0].message})
    return;
  }

  let user = new User();

  user.username = req.body.username;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.role = req.body.role;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.email = req.body.email;
  User.register(new User(user), req.body.password, function(err, user) {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }

    passport.authenticate('local')(req, res, function (error) {
      if(error) {
        res.statusCode = 500;
        res.send('Error');
      }
      user = req.user;
      user.salt = null;
      user.hash = null;
      res.status(200).send({user});
    });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  user = req.user;
  user.salt = null;
  user.hash = null;
  res.status(200).send({user});
});

router.get('/logout', function(req, res) {
  req.logout();
  req.session = null;
  res.status(200).send('OK');
});

module.exports = router;
