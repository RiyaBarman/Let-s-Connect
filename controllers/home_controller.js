const Post=require('../models/post');
const User=require("../models/user");
module.exports.home=function(req,res){

   // return res.end("<h1>module is working with controller</h1>");
   //populate the user of each post to get every attribute of user
   Post.find({})
   .populate('user')
   .populate({
      path:'comments',
         populate: {
            path:'user'
         }
   })
   
   .exec(function(err,posts){
   User.find({},function(err,users){
    return res.render('home',{

        title: "codial |  HOME",
        posts: posts,
        all_users: users
      });
   })
  
   })
};