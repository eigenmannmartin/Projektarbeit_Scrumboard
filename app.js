
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , api = require('./routes/api')
  , auth = require('./routes/auth')
  , http = require('http')
  , path = require('path')
  , db = require('./models')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/api', api);
app.get('/*', routes.index);
//app.use('/auth', auth);




passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

/*db.User.create({ username: 'seb', first_name: 'Reto', last_name: "Humbold" })
db.User.create({ username: 'eim', first_name: 'Martin', last_name: "Eigenmann" })
db.Task.create({ name: 't2', description: 'first task', difficulty: "2", UserId: 1})
db.Task.create({ name: 't1', description: 'second task', difficulty: "5", UserId: 1})
*///db.Task.findAll().then( function(result){console.log(result)})


db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
})		

