var express = require('express');
var router = express.Router();

/* GET users signin listing. */
router.get('/', function(req, res, next) {
  res.redirect("/users/signup")
});

module.exports = router;
