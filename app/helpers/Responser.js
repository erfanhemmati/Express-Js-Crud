module.exports = {
    ErrorResponser: (res, msg) => {
        const error = msg;
        var message = {};
        var status = 0;

        switch(error) {
            case 'not found':
                message = { error: 'Post not found' };
                status = 404;
                break;

            default:
                message = { error: 'Unknown Error' };
                status = 503;
                break;
            }
            
            if(status)
                res.status(status);

            rew.json({
                error: true,
                success: false,
                'message': message
            });    
        },

        SuccessResponser: (res, msg) => {
            res.json({
                error: false,
                success: true,
                'message': {
                    success: msg
                }
            });
        },

        DataResponser: (res, data) => {
            res.json({
                error: false,
                success: true,
                data: data
            });
        }
};