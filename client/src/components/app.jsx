import React from 'react';
import axios from 'axios';

import Nav from './nav.jsx';
import Search from './search.jsx';
import Favorites from './favorites.jsx';


class App extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      viewFavorites: false,
      savedFavortes: [],
      eventResults: [],
      viewResults: [],
      filteredResults: [],
      cities: [],
      dates: [], 
      venues: []
    }
    this.searchForEvents = this.searchForEvents.bind(this);
    this.saveToDataBase = this.saveToDataBase.bind(this);
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.deleteFromDatabase = this.deleteFromDatabase.bind(this);
    this.setResultAndCategories = this.setResultAndCategories.bind(this);
    this.filteredResultsonClick = this.filteredResultsonClick.bind(this);
	}

  searchForEvents(e, keyword) {
    e.preventDefault()
    axios.post(`/events/${keyword}`)
    .then(response => { this.setResultAndCategories(response.data) })
    .catch(err => console.log('ERROR', err))
  }

  saveToDataBase(dataObj) {
    axios.post('/events', dataObj)
    .then(response => console.log('saved: ', response))
    .catch(err => console.log('error: ', err))
  }

  fetchFromDatabase(){
    axios.get('/events')
    .then(response => { this.setState({savedFavortes: response.data}) })
    .catch(err => console.log('couldnt fetch', err))
  }

  deleteFromDatabase(id) {
    axios.delete(`/events/${id}`)
    .then(res => {this.fetchFromDatabase()})
    .catch(err => console.log(err, 'ERROR'))
  }

  setResultAndCategories(data) {
    let cities = [], dates = [], venues = [], obj = {};
    data.forEach(event => {
      if (!obj[event.city]) {
        obj[event.city] = event.city;
        cities.push(event.city)       
      }
      if (!obj[event.date]) {
        obj[event.date] = event.date;
        dates.push(event.date)  
      }
      if (!obj[event.venueName]) {
        obj[event.venueName] = event.venueName;        
        venues.push(event.venueName)       
      }
    }) 
    this.setState({eventResults: data, viewResults: data, cities, dates, venues});
  }

  filteredResultsonClick(category, item) {
    let filteredResults = []; 
    this.state.eventResults.forEach(event => {
      if (event[category] === item) {
        filteredResults.push(event)
      }
    })
    this.setState({viewResults: filteredResults})
  }

	render() {
		return (
			<div>
				<Nav/>
        <div className="container-fluid">
          <button className="btn btn-secondary btn-sm" style={{float:'right'}} 
                  onClick={() => {this.setState({viewFavorites: !this.state.viewFavorites})}}>
                  {this.state.viewFavorites ? 'View Saved Favorites' : 'View Search Results'}
          </button>

          <div className="row">
          {
            this.state.viewFavorites === false ? (
              <div className="col-md-12">
                  <Search searchForEvents={this.searchForEvents}
                          results={this.state.viewResults}
                          saveToDataBase={this.saveToDataBase}
                          cities={this.state.cities}
                          dates={this.state.dates}
                          venues={this.state.venues}
                          filteredResultsonClick={this.filteredResultsonClick}
                          filteredResults={this.state.filteredResults}/>
              </div>
              ) : (
              <div className="col-md-12">
                  <Favorites savedFavortes={this.state.savedFavortes} 
                            fetchFromDatabase={this.fetchFromDatabase}
                            deleteFromDatabase={this.deleteFromDatabase} />
              </div>
              )
          }
          </div>
        </div>
			</div>
			)
	}
}


export default App;
             
  