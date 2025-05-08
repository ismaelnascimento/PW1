var express = require('express');
var router = express.Router();

/* GET users signin userid listing. */
router.get('/:userid', function(req, res, next) {
  res.send(`Welcome user ${req.params.userid}`);
});

module.exports = router;
