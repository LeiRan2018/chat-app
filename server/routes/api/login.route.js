var express = require('express');
var router = express.Router();
var loginController = require('../../controllers/login.controller');

router.post('/', loginController.postuser);
module.exports = router;