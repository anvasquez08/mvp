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
      <div>
      {console.log(this.props)}
      <label>Cities:</label>
        <select className="dropdown" onChange={this.onChange} value={this.state.value} name="city">
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

