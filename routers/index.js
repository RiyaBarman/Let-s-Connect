 const express=require('express');
const router =express.Router();

 const homeController=require('../controllers/home_controller');

 console.log(' express routes is working');
 router.get('/',homeController.home);
 //CALLING USER CONTROLLER FOR USER HANDLING

 router.use('/users',require('./users'));
 
 //POST HANDLING CONTROLLER CALL

 router.use('/posts',require('./posts'));


 module.exports=router;