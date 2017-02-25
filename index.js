const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Event = require('./server/controllers/events');

require('dotenv').config();
// connect to the database and load models
require('./server/models').connect(process.env.EPMONGO || process.env.MONGO_KEY);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.get('/googlekey', (req, res) => {
  res.status(200).json(process.env.GOOGLE_MAP);
});

<<<<<<< HEAD

=======
>>>>>>> 4622b72e3ec54bb2d62f0fc6334707598377146c
app.post('/makeevent', (req, res, next) => {
  console.log(req.body, 'event body');
  Event.createEvent(req.body);
  res.send('event made');
});

/**
 * Route to get events for both user, and events page
 * @param req.body, if it contains the username, then get
 * that user's events
 * @return Sets the state detailbox to the clicked event
 */
app.get('/events', (req, res) => {
  if (!req.body.username) {
    Event.findAll().then(events => res.send(events));
  } else {
    res.json(Event.findUserevent(req.body.username));
  }
});

app.get('/users', (req, res) => {

})
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
