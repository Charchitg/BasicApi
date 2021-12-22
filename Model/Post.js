const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title : String , 
    description : String , 
    author : String ,
    uid : String ,  
    Date :{
        type : String , 
        default : Date.now
    } 
});

const Post = mongoose.model('post' , PostSchema);

module.exports = Post ;