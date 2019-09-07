const router = require('express').Router();
const jwt = require('jsonwebtoken');
const uuidv1 = require('uuid/v1');

router.post('/register', (req, res, next) => {
  res.send('Register route here');
});

router.post('/login', (req, res, next) => {
  const uuid = uuidv1();
  const token = jwt.sign({
    id: uuid,
    text: 'blabla'
  }, 'secret'); // generate token

  // instead of blabla there should be some data or something

  console.log(token);
  res.header('auth-token', token); // assign to header
  res.send(token);
});

module.exports = router;
