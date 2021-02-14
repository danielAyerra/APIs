const express = require('express');

const router = require('./routes');

const cors = require('cors');

const app = express();

// view engine setup

app.use(express.json());

app.use(cors());

app.use('/', router);

app.listen(3000, ()=> console.log("Server listens"));
module.exports = app;
