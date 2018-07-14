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
        <div className="panel panel-primary">
        <form>
        <h4>Search by Artist Name:</h4>
        <label>
          <input name="keyword"
                 className="form-control-sm"  
                 type="text"   
                 value={this.state.keyword} 
                 onChange={this.onChange}/>
        </label>
        <button className="btn btn-secondary btn-sm" onClick={(e) => {this.props.searchForEvents(e, this.state.keyword)}}>Search</button>
        </form>  
        </div>


        {
          this.props.results.length > 0 && 
            <Results results={this.props.results}
              saveToDataBase={this.props.saveToDataBase}
              cities={this.props.cities}
              dates={this.props.dates}
              venues={this.props.venues}
              filteredResultsonClick={this.props.filteredResultsonClick}
              filteredResults={this.props.filteredResults}
              viewFiltered={this.props.viewFiltered}/>  
        }
      </div>
      )
  }
}

export default Search;

        