const mongoose = require('mongoose');

const Events = new mongoose.Schema({
  username: String,
  title: String,
  eventTime: String,
  eventDate: String,
  location: String,
  createdAt: String, // In the format of "2/16/2017, 8:28:03 PM"
  tags: String,
  businessName: String,
  picLink: String, // Link to hosted picture
  busLink: String, // url to business' homepage
  description: String,
  attendees: {},
  eventTimeObj: Date,
  eventDateObj: Date,
});

const ev = mongoose.model('Events', Events);

module.exports = ev;
