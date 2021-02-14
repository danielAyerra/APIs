var express = require('express');

var router = require('./routes');

var app = express();

// view engine setup

app.use(express.json());

app.use('/', router);

app.listen(3000, ()=> console.log("Server listens"));
module.exports = app;
