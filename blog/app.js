//引入所需模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
//配置路由
var routes = require('./config/routes.js');


//使用mongoose类库进行数据模式设计
mongoose.connect("mongodb://127.0.0.1/blog");



var app = express();



//内部变量赋值
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm'); 
app.engine('.htm',require('ejs').__express);

//使用各种中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'45454',
  store:new MongoStore({
    url:'mongodb://127.0.0.1/blog'
  })
}));


routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
