const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const passport=require('passport');

router.use('/signin',userController.signin);
router.use('/signup',userController.signup);
router.post('/create',userController.createAccount);
router.post('/authenticate',passport.authenticate('local',{
    failureRedirect:'/users/signin'
}),userController.orderHome);
router.get('/menu/:id',passport.checkAuthentication,userController.menu);
router.get('/signout',userController.signOut);
router.get('/restaurants',passport.checkAuthentication,userController.restaurants);
router.get('/successful_order_placed',userController.success_order)
router.get('/contact',userController.contact);
// router.post('/authenticate',function(req,res){
//     console.log(req.body)
// })
module.exports=router;