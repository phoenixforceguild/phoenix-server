var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.contentType("application/json");
  res.send(JSON.stringify({"healthcheck":"ok"}));
});

module.exports = router;