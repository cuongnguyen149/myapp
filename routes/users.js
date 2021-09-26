var express = require('express');
var router = express.Router();
const add = require('../services/number');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const total = add.add(1, 3);
  res.send({ total });
});

module.exports = router;
