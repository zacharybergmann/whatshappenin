const Event = require('../models/event.js');

const createEvent = function (event) {
  Event(event).save();
};

module.exports = createEvent;
