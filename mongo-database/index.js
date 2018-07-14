const mongoose = require('mongoose');

mongoose.connect('mongodb://Ana:hack123@ds137631.mlab.com:37631/mvp-ticketmaster');
mongoose.Promise = require('bluebird');
const db = mongoose.connection

db.on('open', () => console.log('opened'));

module.exports = db