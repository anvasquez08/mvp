import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFromDatabase()
  }

  render() {
    return (
      <div>
      <h4>Saved Favorites:</h4>
      {
        this.props.savedFavortes.map((event, i) => {
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

export default Favorites;