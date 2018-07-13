import React from 'react';
import axios from 'axios';

import Nav from './nav.jsx';
import Search from './search.jsx';
import Results from './results.jsx';
import Favorites from './favorites.jsx';


class App extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      eventResults: [],
      savedFavortes: [],
      viewFavorites: false
    }
    this.searchForEvents = this.searchForEvents.bind(this);
    this.saveToDataBase = this.saveToDataBase.bind(this);
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
	}

  searchForEvents(e, keyword) {
    e.preventDefault()
    axios.post(`/events/${keyword}`)
    .then(response => {this.setState({eventResults: response.data})})
    .catch(err => console.log('ERROR', err))
  }

  saveToDataBase(dataObj) {
    axios.post('/events', dataObj)
    .then(response => console.log('saved: ', response))
    .catch(err => console.log('error: ', err))
  }

  fetchFromDatabase(){
    axios.get('/events')
    .then(response => {
      console.log('this is saved in the database', response)
      this.setState({savedFavortes: response.data})
    })
    .catch(err => console.log('couldnt fetch', err))
  }

  deleteFromDatabse() {
    axios.delete()
  }


	render() {
		return (
			<div>
				<Nav/>
        <div className="container-fluid">
          <button className="btn btn-primary" style={{float:'right'}} 
                  onClick={() => {this.setState({viewFavorites: !this.state.viewFavorites})}}>
                  {this.state.viewFavorites ? 'Saved Favorites' : 'View Search Results'}
          </button>
          {
            this.state.viewFavorites === false ? (
              <div>
                  <Search searchForEvents={this.searchForEvents}/>
                  <Results results={this.state.eventResults}
                           saveToDataBase={this.saveToDataBase}/>
              </div>
              ) : (
              <div>
                  <Favorites savedFavortes={this.state.savedFavortes} 
                            fetchFromDatabase={this.fetchFromDatabase}/>
              </div>
              )
          }
        </div>
			</div>
			)
	}
}

export default App;
             
  