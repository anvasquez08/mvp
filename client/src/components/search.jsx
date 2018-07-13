import React from 'react';

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
        <label> Keyword: 
          <input name="keyword" 
                 type="text"   
                 value={this.state.keyword} 
                 onChange={this.onChange}/>
        </label>
        <button onClick={(e) => {this.props.searchForEvents(e, this.state.keyword)}}>Search</button>
        </form>    
      </div>
      )
  }
}

export default Search;