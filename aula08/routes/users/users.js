var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var users = [
    {
      name: "Ismael",
      age: 17
    }
  ]

  res.render('users/users', { users: users });
});

module.exports = router;
