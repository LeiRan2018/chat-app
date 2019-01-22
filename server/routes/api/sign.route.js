var express = require('express');
var router = express.Router();
var signController = require('../../controllers/sign.controller');

router.post('/', signController.postuser);
module.exports = router;