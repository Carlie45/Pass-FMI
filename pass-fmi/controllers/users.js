const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/', (req, res) => {
  newUser = new User({name:'Pesho'});
  newUser.save(function (err, ok) {
    if (err) return console.error(err);
    res.status(200).send('OK');
  });
});

router.get('/usersList', function(req, res) {
  User.find({}, function(err, users) {
    let userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.status(200).send(userMap);
  });
});
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
