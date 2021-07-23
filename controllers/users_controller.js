const User=require('../models/user');

module.exports.userprofile=function(req,res){
    return res.render('user_profile',{
        title: "user profile"
        
    });
};


//RENDER THE SIGN UP PAGE
module.exports.signUp=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign-up-user',{
        title:"socialmedia | sign up"
    });
};


//render the sign in page
module.exports.signIn=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign-in-user',{
        title:"socialmedia | sign up"
    });
};

//GET THE SIGN UP DATA
module.exports.create=function(req,res){
    console.log(req);
 if(req.body.password != req.body.confirm_password){
     return res.redirect('back');
    }
     User.findOne({email: req.body.email}, function(err, user){

        if(err){
        console.log('error in finding user in signing up'); 
        return;
        }

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up');
                 return;
                }

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }

    });
};

//GET THE SIGN IN DATA
module.exports.createSession=function(req,res){
    
    return res.redirect('/');
};
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}
