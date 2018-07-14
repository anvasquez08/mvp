import React from 'react';

class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.props.filteredResultsonClick(key, val)
    this.setState({value: e.target.value}, ()=> console.log(this.state.value))
  } 

  render() {
    return (
      <div className="w-100 p-3">
        <select className="dropdown" onChange={this.onChange} value={this.state.value} name="city" >
        <option value="" selected disabled>Cities</option>
        {
          this.props.cities.map((city, i) => {
            return (
              <option className="dropdown-item" href="#" key={i}>{city}</option>
              )
          })
        }
       </select>
      <select className="dropdown" onChange={this.onChange} value={this.state.value} name="date">
      <option value="" selected disabled>Dates</option>
        {
          this.props.dates.map((date, i) => {
            return (
              <option className="dropdown-item" key={i}>{date}</option>
              )
          })
        }
       </select>
      <select className="dropdown" onChange={this.onChange} value={this.state.value} name="venueName">
      <option value="" selected disabled>Venues</option>
        {
          this.props.venues.map((venue, i) => {
            return (
              <option className="dropdown-item" key={i}>{venue}</option>
              )
          })
        }
       </select>
      </div>
      )
  }
}

export default Filter;       

