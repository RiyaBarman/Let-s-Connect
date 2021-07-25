const express=require('express');
const passport=require('passport');
const router = express.Router();
const postsController=require('../controllers/posts_controller');

router.post('/create',passport.checkAuthentication,postsController.create);
//post deleting only when user is authenticated
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
module.exports=router;