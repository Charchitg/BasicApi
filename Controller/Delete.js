const Post = require('../Model/Post');


module.exports = async (req,res,next) => {
    try {
        const postid = req.body.postid;
        const deleted = await Post.findOneAndDelete({uid : postid });
        console.log(deleted);
        res.json(deleted);
    } catch (error) {
        res.json({
            message : error
        });
    }
}  