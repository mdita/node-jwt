const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const jwtToken = req.header('auth-token');
  if (!jwtToken) {
    return res.status(401).send('access denied');
  }

  // verify token
  try {
    const verified = jwt.verify(jwtToken, 'secret');
    req.user = verified;
    next()
  } catch (err) {
    res.status(400).send('Invalid token');
  }
}
