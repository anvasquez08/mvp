const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/event');
mongoose.Promise = require('bluebird');
const db = mongoose.connection

db.on('open', () => console.log('opened'));

module.exports = db