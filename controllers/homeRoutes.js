const router = require('express').Router();

router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/home', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('home');
});

router.get('/dashboard', (req,res) => {
    res.render('dashboard');
});




module.exports = router;