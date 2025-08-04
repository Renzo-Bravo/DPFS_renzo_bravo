var express = require('express');
<<<<<<< HEAD
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
=======
const indexCtrl = require('../controllers/indexCtrl');
var router = express.Router();

/* GET home page. */
router.get('/', indexCtrl.index);
>>>>>>> temporaly

module.exports = router;
