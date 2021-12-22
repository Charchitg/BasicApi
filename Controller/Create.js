const Post = require('../Model/Post');
const uuid = require('uuid');

module.exports = async (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;
    const author = req.body.author;
    const uid = uuid.v4();
    console.log(title , description , author);
    

    const NewPost = new Post({title : title  , description : description , author : author  , uid : uid});
    try {
        const saved = await NewPost.save();
        res.json(saved);

    } catch (error) {
        res.json({
            message : error
        });
    }
}  