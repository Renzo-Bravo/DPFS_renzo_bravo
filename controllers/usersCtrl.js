const usersCtrl = {
    login:function(req, res, next) {
        res.render('users/login', { title : 'Express' });
},
    register:function(req, res, next) {
        res.render('users/register', { title : 'Express'});
},
    profile:function(req, res, next) {
        res.render('users/profile')
    }
}

module.exports = usersCtrl;