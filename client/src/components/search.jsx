import React from 'react';
import Results from './results.jsx';

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <form>
        <label> Search by Artist Name: 
          <input name="keyword"
                 className="form-control"  
                 type="text"   
                 value={this.state.keyword} 
                 onChange={this.onChange}/>
        </label>
        <button className="btn btn-primary" onClick={(e) => {this.props.searchForEvents(e, this.state.keyword)}}>Search</button>
        </form>  
        {
          this.props.results.length > 0 && 
            <Results results={this.props.results}
              saveToDataBase={this.props.saveToDataBase}
              cities={this.props.cities}
              dates={this.props.dates}
              venues={this.props.venues}/>  
        }
      </div>
      )
  }
}

export default Search;

        