const Posts = require('../models/post');
const Responser = require('./../helpers/Responser');
var msg;

module.exports = {
    /* Show all posts with async/await */
    index: async (req, res, next) => {
        try{
            const posts = await Posts.find({});
            Responser.DataResponser(res, posts);
        } catch(err) {
            next(err);
        }
    },

    /* Store post with async/await */
    store: async (req, res, next) => {
        try{
            const post = await Posts.create({
                title: req.body.title,
                body: req.body.body
            });
            Responser.DataResponser(res, post);
        } catch(err) {
            next(err);
        }
    },

    /* Show one post info with async/await */

    get: async (req, res) => {
        try{
            const post = await Posts.findById({ _id: req.params.id });
            if(post == null) {
                msg = "not found"
                Responser.ErrorResponser(res, msg);
            } else {
                Responser.DataResponser(res, post);
            }
        } catch(err) {
            msg = "not found"
            Responser.ErrorResponser(res, msg);
        }
    },

    /* Edit one post info with async/await */

    put: async (req, res) => {
        try{
            const post = await Posts.findByIdAndUpdate({ _id: req.params.id }, {
                title: req.body.title,
                body: req.body.body
            });
            if(post == null) {
                msg = "not found"
                Responser.ErrorResponser(res, msg);
            } else {
                // console.log(post.id);
                const edited_post = await Posts.findById({ _id: post.id });
                Responser.DataResponser(res, edited_post);
            }
        } catch(err) {
            msg = "not found"
            Responser.ErrorResponser(res, msg);
        }
    },

    /* Delete one post with async/await */

    delete: async (req, res) => {
        try{
            const post = await Posts.findByIdAndDelete({ _id: req.params.id });
            if(post == null) {
                msg = "not found"
                Responser.ErrorResponser(res, msg);
            } else {
                msg = "Post deleted";
                Responser.SuccessResponser(res, msg);
            }
        } catch(err) {
            msg = "not found"
            Responser.ErrorResponser(res, msg);
        }
    }
};