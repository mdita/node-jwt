const router = require('express').Router();
const verify = require('../token/checkToken');


router.get('/', verify, (req, res, next) => {
  res.json({
    topics: [
      {
        title: 'topic 1',
        description: 'description topic 1'
      },
      {
        title: 'topic 2',
        description: 'description topic 2'
      }
    ]
  })
});

module.exports = router;
