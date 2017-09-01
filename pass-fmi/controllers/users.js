const express = require('express');
const router = express.Router();

const passport = require('passport');
const User = require('../models/users');
//
// router.get('/', (req, res) => {
//   newUser = new User({name:'Pesho'});
//   newUser.save(function (err, ok) {
//     if (err) return console.error(err);
//     res.status(200).send('OK');
//   });
// });
//
router.get('/usersList', function(req, res) {
  User.find({}).then((users) => {
    res.status(200).json(users);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

 router.post('/', function(req, res) {
   let user = new User();

   console.log('Add user!');
   console.log(req.body.username);

   user.username = req.body.username;
   user.firstName = req.body.firstName;
   user.lastName = req.body.lastName;
   user.role = req.body.role;
   user.phone = req.body.phone;
   user.password = req.body.password;
   user.email = req.body.email;
   console.log(user);

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
  let user = new User();

  console.log('Add user!');
  console.log(req.body.username);

  user.username = req.body.username;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.role = req.body.role;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.email = req.body.email;
  User.register(new User(user), req.body.password, function(err, user) {
      console.log(err);
      if (err) {
        console.log('Error');
        console.log(err);
        res.statusCode = 500;
        res.send(err);
      }

      passport.authenticate('local')(req, res, function (error) {
        if(error) {
          console.log(error);
          res.statusCode = 500;
          res.send('Error');
        }
        user = req.user;
        // user.salt.delete();
        user.salt = null;
        user.hash = null;
        res.status(200).send({user});
      });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log(req.user);
    user = req.user;
    // user.salt.delete();
    user.salt = null;
    user.hash = null;
    res.status(200).send({user});
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session = null;
    res.status(200).send('OK');
});

// router.post('/login', passport.authenticate('local'), function(req, res) {
//
// });
//
// router.get('/:id', (req, res) => {
//   User.findOne({
//       attributes: {
//         exclude: ['passhash', 'salt']
//       },
//       where: {
//         id: req.params.id
//       }
//     })
//     .then((user) => {
//       if (!user) {
//         return res.sendStatus(404);
//       }
//       res.status(200).send(user);
//     });
// });
//
// router.post('/', authentication.register);
//
// router.put('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       user.update(req.body)
//         .then(
//           (updatedUser) => {
//             updatedUser = updatedUser.toJSON();
//             delete updatedUser.passhash;
//             delete updatedUser.salt;
//             res.status(200).send(updatedUser);
//           },
//           (error) => {
//             return res.sendStatus(409);
//           });
//     })
//     .catch((error) => {
//       return res.sendStatus(404);
//     });
// });

module.exports = router;
