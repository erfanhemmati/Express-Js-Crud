const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./app/routes/route');
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/erfan', {useCreateIndex: true, useNewUrlParser: true});
// erfan is our db name

route(app);

app.listen(port, () => {
    console.log('Express server is running at localhost:3030');
});