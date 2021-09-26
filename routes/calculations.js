var express = require('express');
var router = express.Router();
const number = require('../services/number');

/* GET users listing. */
router.get('/add', function (req, res, next) {
  const { a = 0, b = 0 } = req.query;
  const total = number.add(+a, +b);
  res.send({ total: total + 100 });
});

router.get('/sub', function (req, res, next) {
  const { a = 0, b = 0 } = req.query;
  const result = number.sub(+a, +b);
  res.send({ result });
});

module.exports = router;
