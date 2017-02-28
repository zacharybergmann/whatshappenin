const Event = require('../models/event.js');

const Events = {
  createEvent(event) {
    Event(event).save();
  },
  findAll() {
    return Event.find();
  },
  findUserevent(user) {
    return Event.find().where({ username: user })
      .then(events => events);
  }
};

module.exports = Events;
