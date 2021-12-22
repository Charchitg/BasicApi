const Post = require('../Model/Post');


module.exports = async (req,res,next) => {
   try {
    const postid = req.body.postid;
    console.log(postid);
    const PostData = await Post.findOne({uid : postid});
    PostData.title = req.body.title;
    PostData.description = req.body.description;
    PostData.author = req.body.author;

    const updatedPost = await PostData.save();
    res.json(updatedPost);

   } catch (error) {
    res.json({
        message : error
    });
   }
}  