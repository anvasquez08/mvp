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
      <div className="row">
      {
        this.props.savedFavortes.map((event, i) => {
          return (
              <div key={i}  className='col-md-3'>
                <div className="card">
                  <div className="card-body">
                    <h5 href={event.url} className="card-title">{event.artist}</h5> 
                    <a className="card-text">Date: {event.date}</a><br/>  
                    <a className="card-text">Address: {event.address}</a><br/>
                    <a className="card-text">City: {event.city}</a><br/>
                    <a className="card-text">Genre: {event.genre.name}</a><br/>
                    <a className="card-text">Venue Name: {event.venueName}</a><br/>
                    <a className="card-text">Zipcode: {event.zipcode}</a>
                  </div>    
                    <img className="card-img-top" src={event.image} height="250" width="auto"></img>     
                <button onClick={() => {this.props.deleteFromDatabase(event._id)}}>Delete from Favorites</button>              
                </div>    
              </div>
            )
        })
      }
      </div>
      </div>
      )
  }
}

export default Favorites;