const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventid : Number,
    name : String,
    attendance : Number
});

const Event = mongoose.model('Event',EventSchema);

module.exports = Event