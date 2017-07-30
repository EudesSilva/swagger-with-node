var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');

var app = express();
 


// Begin configuration Swagger

// swagger definition
var swaggerConfig = {
  info: {
    title: 'Swagger API',
    version: '1.1.1',
    description: 'Swagger API',
  },
  host: 'localhost:3000',
  basePath: '/swagger.json',
};
 
var options = { 
  swaggerDefinition: swaggerConfig, 
  apis: ['./routes/*.js'], // path generate API-DOC
};

// initialize swagger
var swaggerSpec = swaggerJSDoc(options);


// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
 

// End configuration Swagger



var users = require('./routes/users');
app.use('/users', users);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 

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
