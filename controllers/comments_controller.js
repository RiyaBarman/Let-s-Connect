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
module.exports.destroy=function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err){
            return res.redirect('back');
        }
        else{
            
            if(comment.user==req.user.id){
                //delete the comment from post comment array too
                let postId=comment.post;
                comment.remove();
                Post.findByIdAndUpdate(postId,{$pull: {comments:req.params.id}},function(err,post){
                    if(err){
                        return res.redirect('back');
                    }
                    else{
                        return res.redirect('back');
                    }
                });
            }
        }
    });


}