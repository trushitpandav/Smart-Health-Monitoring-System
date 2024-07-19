var express = require('express');
var router = express.Router();
var ReportC = require('../controller/report');
var user = require('../controller/user');

router.post('/GenHealthReport',user.sequre,ReportC.GenHealthReport);
router.get('/ViewHistoricalReport',user.sequre,ReportC.ViewHistoricalReport);

module.exports = router;