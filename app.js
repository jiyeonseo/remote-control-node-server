var express = require('express');

var remote = require('./remote');
var app = express();

app.get('/remote/on_noswing', function(req, res) {
  remote.on_noswing();
  res.send('on');
});

app.get('/remote/on_swing', function(req, res) {
  remote.on_swing();
  res.send('on');
});

app.get('/remote/off_noswing', function(req, res) {
  remote.off_noswing();
  res.send('off');
});

app.get('/remote/off_swing', function(req,res) {
  remote.off_swing();
  res.send('off');
});

app.get('/health', function(req, res) {
  res.send('ok'); 
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.status(404);
  res.send('not found');  
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

app.listen(4000, () => {
  console.log("app started !!");
});
module.exports = app;
