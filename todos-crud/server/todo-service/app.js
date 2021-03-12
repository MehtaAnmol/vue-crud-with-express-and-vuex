var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var todoRouter = require('./routes/todo');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:8080"
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todoRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

module.exports = app;
