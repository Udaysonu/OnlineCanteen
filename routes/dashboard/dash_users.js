const express=require('express');
const router=express.Router();
const dash_userController=require('../../controllers/dashboard/dash_userController');

router.post('/updateUser/:id',dash_userController.updateUser)
router.get('/user_list',dash_userController.user_list)

module.exports=router;