const db = require('./index.js')

module.exports = {
  retrieveAllFromDB: () => {
    return new Promise((resolve, reject) => {
      let mysqlQ = `SELECT * FROM events`
      db.query(mysqlQ, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }, 
  saveToDatabase: (data) => {
    return new Promise((resolve, reject) => {
      let mysqlQ = `INSERT INTO events SET ?`
      db.query(mysqlQ, data, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  },
  deleteFromData: (id) => {
    return new Promise((resolve, reject) => {
      let mysqlQ = `DELETE FROM events WHERE id = ?`
      db.query(mysqlQ, id, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}