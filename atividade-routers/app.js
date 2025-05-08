var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var dataRouter = require('./routes/data');
var usersRouter = require('./routes/users/users');
var usersSigninRouter = require('./routes/users/signin');
var usersSigninUserIdRouter = require('./routes/users/signin-userid');
var usersSignupRouter = require('./routes/users/signup');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const pageMiddleware = (req, res, next) => {
  console.log(`Page: ${req.url}`)
  next();
};

app.use(pageMiddleware);

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/data', dataRouter);
app.use('/users', usersRouter);
app.use('/users/signin', usersSigninRouter);
app.use('/users/signin', usersSigninUserIdRouter);
app.use('/users/signup', usersSignupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
