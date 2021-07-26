const express=require('express');
const router = express.Router();
const passport = require('passport');
const userController=require('../controllers/users_controller');
router.get('/profile/:id',passport.checkAuthentication ,userController.userprofile);
router.post("/update/:id",passport.checkAuthentication,userController.update);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.post('/create',userController.create);


// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',    //strategy
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

router.get('/sign-out',userController.destroySession);

module.exports=router;//if authentication done then this will be called