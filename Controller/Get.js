const Post = require('../Model/Post');


module.exports = async (req,res,next) => {
    try {
        const postid = req.body.postid;
        console.log(postid);
        const PostData = await Post.findOne({uid : postid});
        res.json(PostData);
    } catch (error) {
        res.json({
            message : error
        });
    }
}  