const db = require('./index.js')
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  artist: String,
  url: String,
  image: String, 
  date: String,
  genre: { name: String, id: String },
  venueName: String,
  address: String,
  city: String,
  zipcode: String,
})

const Event = db.model('Event', eventSchema)

module.exports = Event