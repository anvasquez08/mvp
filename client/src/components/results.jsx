import React from 'react';
import Filter from './filter.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
      <h4>Results: </h4>
      <Filter result={this.props.results} cities={this.props.cities} 
              dates={this.props.dates} venues={this.props.venues}
              filteredResultsonClick={this.props.filteredResultsonClick}
              filteredResults={this.props.filteredResults}/>
             {
              this.props.results.map((event, i) => {
                return (
                  <div key={i}>
                    <a href={event.url}>Artist: {event.artist}</a> 
                    <div>Date: {event.date}</div>  
                    <div>Address: {event.address}</div>
                    <div>City: {event.city}</div>
                    <div>Genre: {event.genre.name}</div>
                    <div>Venue Name: {event.venueName}</div>
                    <div>Zipcode: {event.zipcode}</div>   
                    <img src={event.image}></img>   
                    <button onClick={() => {this.props.saveToDataBase(event)}}>Save to Favorites</button>              
                  </div>
                  )
              })
            }
      </div>
      )
  }
}

export default Results;
