const express=require('express');
const router=express.Router();

const dashboardController=require('../../controllers/dashboardController');

router.post('/placeorder',dashboardController.placeorder);
router.get('/order_board',dashboardController.order_dashboard);

 
module.exports=router;