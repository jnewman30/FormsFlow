var http = require('http');
var red = require('node-red');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formsRouter = require('./routes/forms');
var formDataRouter = require('./routes/form-data');

var app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/form-storage')));
// app.use(express.static(path.join(__dirname, 'public/flows')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forms', formsRouter);
app.use('/formData', formDataRouter);

var settings = {
    httpAdminRoot: '/red',
    httpNodeRoot: '/api',
    userDir: './public/flows',
    flowFile: 'flows.json',
    uiPort: 1880    
};

red.init(server, settings);
app.use(settings.httpAdminRoot, red.httpAdmin);
app.use(settings.httpNodeRoot, red.httpNode);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

server.listen(8000);
red.start().then(() => {
    console.info('NODE RED STARTED');
});

module.exports = app;
