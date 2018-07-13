const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

const {API_KEY} = require('./config/keys.js');
const {filterData} = require('./data/helpers.js')

const db = require('./database/index.js')
const model = require('./database/models.js')

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/client/dist/'))

app.listen(3000, () => console.log('Listening to port 3000'));

app.post('/events/:keyword', (req, res) => {
  let {keyword} = req.params;
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${keyword}`)
  .then(response => {
    let finalData = filterData(response.data._embedded.events)
    console.log('sending final data', finalData)
    res.send(finalData)
  })
  .catch(err => console.log(err))
})

app.post('/events', (req, res) => {
  let event = req.body;
  model.saveToDatabase(event)
  .then(response => {
    console.log('saved', response)
    res.send(response)
  })
  .catch(err => console.log(err))

})

app.get('/events', (req, res) => {
  model.retrieveAllFromDB()
  .then(response => res.send(response))
  .catch(err => console.log(err))
})

















