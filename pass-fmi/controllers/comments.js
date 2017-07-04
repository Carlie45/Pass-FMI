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

router.post('/', function(req, res) {
  let comment = new Comment();
  console.log('Add comment!');

  comment.author = req.body.userId;
  comment.content = req.body.content;

  comment.save().then( comment => {
    res.status(200).json(comment);
  })
  .catch(error => {
    res.status(500).send(error);
  });

});

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
