import React from 'react';
        //import React,{Component} from 'react'
        //class SearchBar extends Component{}
class SearchBar extends React.Component{ //Defining a class called SearchBar which is allowed a                                            bunch of functionalities from React.Component

  constructor(props) {
    super(props);
    this.state = { term: 'Hugo' };
    this.setInputState = this.setInputState.bind(this);
  }
  
  setInputState(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.setInputState} />
        The value of input is: {this.state.term}
      </div>
    );
  }
}
    


export default SearchBar;