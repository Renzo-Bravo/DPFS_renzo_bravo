var express = require('express');
<<<<<<< HEAD
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
=======
const usersCtrl = require('../controllers/usersCtrl');
var router = express.Router();

/* GET login page */
router.get('/login', usersCtrl.login);

/* GET register page */
router.get('/register', usersCtrl.register);
>>>>>>> temporaly

module.exports = router;
