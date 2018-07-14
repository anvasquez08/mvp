const Event = require('./schema.js');

module.exports = {
  retrieveAllFromDB: () => {
    return Event.find({})
  },
  saveToDatabase: (data) => {
   return new Event(data).save()
  },
  deleteFromData: (id) => {
    return Event.deleteOne({_id: id})
  }
}