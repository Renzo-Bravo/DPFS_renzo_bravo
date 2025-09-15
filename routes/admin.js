var express = require('express');
const adminCtrl = require('../controllers/adminCtrl');
var router = express.Router();

router.get('/utils', adminCtrl.utils);

module.exports = router;
