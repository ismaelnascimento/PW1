var express = require('express');
var router = express.Router();

/* GET users signup listing. */
router.get('/', function(req, res, next) {
  res.send(`Signup page`);
});

module.exports = router;
