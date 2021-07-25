const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    //to which user the comment belongs to
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'     //which schema hasto be referred for user
    },
    //to which post the comment belongs to
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});

const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;
