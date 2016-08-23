var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var units = require('./routes/units');
var races = require('./routes/races');
var characters = require('./routes/characters');
var users = require('./routes/users');

var unit = require('./models/unit.js');
var race = require('./models/race.js');
var char = require('./models/character.js');

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = global.Promise;

autoIncrement.initialize(mongoose.connect('mongodb://localhost/scpedia'));
// console.log(unit);
unit.schema.plugin(autoIncrement.plugin, 'units');
race.schema.plugin(autoIncrement.plugin, 'races');
char.schema.plugin(autoIncrement.plugin, 'characters');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/units', units);
app.use('/races', races);
app.use('/characters', characters);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
