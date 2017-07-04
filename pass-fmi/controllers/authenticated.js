function loggedIn(req, res, next){
  if(!req.user){
    return res.status(401).send('Please, login!');
  }
  return next();
}

module.exports = loggedIn;
