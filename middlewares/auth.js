const isLogin = (req, res, next) => {
    if(req.session.user == null || req.session.user == undefined){
        req.flash('alertMessage', 'Session telah habis silahkan signin kembali');
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/signin');
    } else {
        // Update waktu kedaluwarsa sesi
        req.session.cookie.expires = new Date(Date.now() + 3600000); 
        req.session.cookie.maxAge = 3600000; 
        next();
    }
}

module.exports = isLogin;