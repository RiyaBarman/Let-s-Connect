const Post = require('../models/post');
const Comment=require('../models/comments');


module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    } ,function(err,post){
        if(err){   
            console.log("error creating posts",err);
             return;
           }
return res.redirect('back');
    }) ;

    };


    module.exports.destroy=function(req,res){
        //verify if post exists or not
        Post.findById(req.params.id,function(err,post){
            if(err){
                return res.redirect('back');
            }
            //if valid post exists
            else{
                //if creater of post and deleting person same then only delete possible
                if(post.user == req.user.id){
                    post.remove();
                    //deleting comments of the related post
                    Comment.deleteMany({post:req.params.id},function(err){
                        return res.redirect('back');
                    });
                }
            }

        });
    }
      

    