const express=require('express');
const router=express.Router();
const dashboardController=require('../../controllers/dashboardController');
router.post('/createMain',dashboardController.createMaincourse);
router.post('/createSnack',dashboardController.createSnacks);
router.post('/createDrink',dashboardController.createDrinks);
router.get('/editmenu',dashboardController.editMenu); 
router.get('/deleteitem',dashboardController.deleteItem);
router.get('/update',dashboardController.updateRest);
router.get('/restaurant',dashboardController.Restaurant);
router.post('/createrest',dashboardController.createRestaurant) 
module.exports=router;