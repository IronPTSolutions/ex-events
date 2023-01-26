const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: 'String',
    require: 'Event title is required'
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
