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
  }
}