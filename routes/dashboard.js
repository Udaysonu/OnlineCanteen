const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/dashboardController');
const restaurant=require('./dashboard/restaurant');
router.use('/restaurant',restaurant);
router.get('/getdetails/:id',dashboardController.getDetails);
router.use('/order',require('./dashboard/order')); 
router.use('/users',require('./dashboard/dash_users'));
router.get('/',function(req,res){
    res.render('dashboard')
})
module.exports=router;