const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../model');
const nodemailer=require('../mailer/new_account_mailer')
passport.use(new LocalStrategy(
    {passReqToCallback:true},
    function(req,username, password, done) {

        console.log(username,password,'welcome')
      User.findOne({ email:username}, function (err, user) {
        if (err) { 
          req.flash('error',"Invalid Username/Password");
          return done(err); }
        if (!user) { 
          req.flash('error',"Invalid Username/Password");
          return done(null, false); }
        if (user.password!=password) { return done(null, false); }
        return done(null, user);
      });
    }
  ));


passport.serializeUser(function(user, done) {
  
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});


passport.checkAuthentication=function(req,res,next){
if(req.isAuthenticated()){
    next();

}
else{
    req.flash('info','Please sign in to continue');
    return res.redirect('/users/signin');
}
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req){
        res.locals.user=req.user
       
    }
    next();
}
module.exports=passport