var express = require('express');
var router = express.Router();
const add = require('../services/number');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const { a = 0, b = 0 } = req.query;
  const total = add.add(a, b);
  res.send({ total });
});

module.exports = router;
