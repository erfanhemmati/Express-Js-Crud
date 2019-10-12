const IndexController = require('./../controllers/IndexController');
const PostController = require('./../controllers/PostController');

module.exports = function(app) {
    app.route('/')
       .get(IndexController.index);

    app.route('/posts')
       .get(PostController.index)
       .post(PostController.store);

    app.route('/posts/:id')
       .get(PostController.get)
       .put(PostController.put)
       .delete(PostController.delete);
}