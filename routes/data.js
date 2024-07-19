var express = require('express');
var router = express.Router();
var DATAC = require('../controller/data');
var user = require('../controller/user');

router.post('/AddHealthData',user.sequre,DATAC.AddHealthData);
router.get('/',user.sequre,DATAC.ViewHealthData);
router.put('/:id',user.sequre,DATAC.HealthUpdate);
router.delete('/:id',user.sequre,DATAC.HealthDelete);



module.exports = router;