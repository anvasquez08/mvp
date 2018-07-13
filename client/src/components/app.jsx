import React from 'react';
import axios from 'axios';

import Nav from './nav.jsx';
import Search from './search.jsx';
import Results from './results.jsx';

class App extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      eventResults: [],
      savedFavortes: []
    }
    this.searchForEvents = this.searchForEvents.bind(this);
	}

  searchForEvents(e, keyword) {
    e.preventDefault()
    axios.post(`/events/${keyword}`)
    .then(response => {
      console.log(Array.isArray(response.data))
      this.setState({eventResults: response.data})
    })
    .catch(err => console.log('ERROR', err))
  }

	render() {
		return (
			<div>
				<Nav/>
        <div className="container-fluid">
           <Search searchForEvents={this.searchForEvents}/>
           <Results results={this.state.eventResults}/>
        </div>
			</div>
			)
	}
}

export default App;