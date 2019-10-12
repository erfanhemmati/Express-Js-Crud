const Responser = require('./../helpers/Responser');
var msg;

module.exports = {
    index: (req, res) => {
        msg = "Welcome to my Express app";
        Responser.SuccessResponser(res, msg);
    },
};