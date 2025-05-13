var express = require('express');
var router = express.Router();

/* GET signin listing. */
router.get('/:userid', function(req, res, next) {
  res.send(`${req.params.userid}`);
});

module.exports = router;
