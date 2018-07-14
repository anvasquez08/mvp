const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

const {API_KEY} = require('./config/keys.js');
const {filterData} = require('./data/helpers.js')

const db = require('./database/index.js')
const model = require('./database/models.js')

const mongod = require('./mongo-database/index.js')
const mongodModel = require('./mongo-database/models.js')

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/client/dist/'))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));

app.post('/events/:keyword', (req, res) => {
  let {keyword} = req.params;
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${keyword}`)
  .then(response => {
    let finalData = filterData(response.data._embedded.events)
    res.send(finalData)
  })
  .catch(err => console.log(err))
})

/* MYSQL */
/*app.post('/events', (req, res) => {
  let event = req.body;
  model.saveToDatabase(event)
  .then(response => {
    console.log('saved', response)
    res.send(response)
  })
  .catch(err => console.log(err))
})*/

/* MONGO */
app.post('/events', (req, res) => {
  let event = req.body;
  mongodModel.saveToDatabase(event)
  .then(response => {
    console.log('saved', response)
    res.send(response)
  })
  .catch(err => console.log(err))
})


/* MYSQL */
/*app.get('/events', (req, res) => {
  model.retrieveAllFromDB()
  .then(response => res.send(response))
  .catch(err => console.log(err))
})*/

/* MONGO */
app.get('/events', (req, res) => {
  mongodModel.retrieveAllFromDB()
  .then(response => {
    console.log(response)
    res.send(response)
  })
  .catch(err => console.log(err))
})

/* MYSQL */
/*app.delete('/events/:id', (req, res) => {
  let {id} = req.params;
  model.deleteFromData(id)
  .then(response => {
    console.log(response)
    res.send(response)
  })
  .catch(err => console.log(err))
})*/

/* MONGO */
app.delete('/events/:id', (req, res) => {
  let {id} = req.params;
  mongodModel.deleteFromData(id)
  .then(response => {
    console.log(response)
    res.send(response)
  })
  .catch(err => console.log(err))
})

