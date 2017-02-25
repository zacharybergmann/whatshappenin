const Event = require('../models/event.js');

<<<<<<< HEAD
const Events = {
  createEvent(event) {
    Event(event).save();
  },
  findAll() {
    return Event.find()
  },
  findUserevent(user) {
    return Event.find().where({ username: user })
      .then(events => events);
  }
};

module.exports = Events;
=======
const createEvent = function (event) {
  Event(event).save();
};

module.exports = createEvent;
>>>>>>> a8048eeee0434f227162924b9eb065f8479bcad0
