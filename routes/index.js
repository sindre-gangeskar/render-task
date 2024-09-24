var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.status(200).jsend.success({
    statusCode: 200, result: {
      message: 'Index homepage!'
    }
  });
});

router.get('/message', function (req, res, next) {
  return res.status(200).jsend.success({
    statusCode: 200, result: {
      message: 'Welcome to Render!'
    }
  })
})

router.get('/random-number', function (req, res, next) {
  const randomNumber = Math.round(Math.random() * 10);
  return res.status(200).jsend.success({
    statusCode: 200, result: {
      message: `Random number generated: ${randomNumber}`
    }
  })
})

router.get('/about', function (req, res, next) {
  return res.status(200).jsend.success({
    statusCode: 200, result: {
      message: 'Made by Sindre Gangeskar - A project deployed on Render'
    }
  })
})
module.exports = router;
