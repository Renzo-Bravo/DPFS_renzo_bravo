var express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
var router = express.Router();

/* GET login page */
router.get('/login', usersCtrl.login);

/* GET register page */
router.get('/register', usersCtrl.register);

module.exports = router;
