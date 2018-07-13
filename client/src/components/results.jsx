import React from 'react';

class Results extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <h4>Results: </h4>
      {console.log(this.props.results)}
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
              </div>
              )
          })
        }
      </div>
      )
  }
}

export default Results;
