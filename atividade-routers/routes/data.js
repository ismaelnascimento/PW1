var express = require('express');
var router = express.Router();

/* POST data listing. */
router.post('/', function(req, res, next) {
  res.send(`Data post to page`);
});

module.exports = router;
