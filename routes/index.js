const express=require('express');
const router=express.Router();


router.use('/users',require('./user'));
router.use('/dashboard',require('./dashboard'));
router.get('/',function(req,res){
    req.cart_list = [];
    return res.render('home');
});


module.exports=router