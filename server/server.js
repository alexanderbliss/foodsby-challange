var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config()

let indexRouter = require('./routes/index.router');
let itemsRouter = require('./routes/items.router');
var port = process.env.PORT || 5000;
var api = process.env.API_key;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static('./server/public'));

app.use('/items', itemsRouter);
app.use('/', indexRouter);

// Listen //
app.listen(port, function () {
    console.log('Listening on port:', port);
});
