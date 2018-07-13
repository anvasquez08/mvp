import React from 'react';

class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <div>
      {console.log(this.props)}
      <label>Cities:</label>
        <select className="dropdown">
        {
          this.props.cities.map((city, i) => {
            return (
              <option className="dropdown-item" href="#" key={i}>{city}</option>
              )
          })
        }
       </select>

       <label>Dates:</label>
      <select className="dropdown">
        {
          this.props.dates.map((city, i) => {
            return (
              <option className="dropdown-item" href="#" key={i}>{city}</option>
              )
          })
        }
       </select>
       <label>Venues:</label>
      <select className="dropdown">
        {
          this.props.venues.map((city, i) => {
            return (
              <option className="dropdown-item" href="#" key={i}>{city}</option>
              )
          })
        }
       </select>
      </div>
      )
  }
}

export default Filter;       

