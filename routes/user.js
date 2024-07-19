var express = require('express');
var router = express.Router();
var USERC = require('../controller/user');

router.post('/register',USERC.register);
router.post('/login',USERC.login);
router.put('/:id',USERC.sequre,USERC.UserUpdate);

module.exports = router;