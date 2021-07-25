const Comment= require('../models/comments');
const Post=require('../models/post');

module.exports.create=function(req,res){
 Post.findById(req.body.post,function(err,post){
     if(post){
        Comment.create({
            content:req.body.content,
            user:req.user._id,
            post:req.body.post
        } ,function(err,comment){
            if(err){   
                console.log("error creating comments",err);
                 return;
               }
               //push the comment id into the posts
               post.comments.push(comment);
               post.save();
          return res.redirect('/');
        }) ;
     }
 })
};