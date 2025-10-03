function guest (req,res, next) {
    if(!req.session.userLogged){
        return res.redirect("/");
    }
    return next();
}

module.exports =  guest;
