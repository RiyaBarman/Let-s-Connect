const express=require('express');
const router = express.Router();
const userController=require('../controllers/users_controller');
router.get('/profile',userController.userprofile);
router.use('/posts',require('./posts'));

module.exports=router;