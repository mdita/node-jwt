const router = require('express').Router();
const jwt = require('jsonwebtoken');


router.post('/register', (req, res, next) => {
  res.send('Register route here');
});

router.post('/login', (req, res, next) => {
  const token = jwt.sign('blabla', 'secret'); // generate token

  // instead of blabla there should be some data or something

  res.header('auth-token', token); // assign to header
  res.send(token);
});

module.exports = router;
