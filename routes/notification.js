var express = require('express');
var router = express.Router();
var NotificationC = require('../controller/Notification');
var user = require("../controller/user");

router.post('/AddNotification',user.sequre,NotificationC.AddNotification);
router.get('/',user.sequre,NotificationC.ViewNotification);

module.exports = router;