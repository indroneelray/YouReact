import React from 'react';
        //import React,{Component} from 'react'
        //class SearchBar extends Component{}
class SearchBar extends React.Component{ //Defining a class called SearchBar which is allowed a                                            bunch of functionalities from React.Component
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.setInputState = this.setInputState.bind(this);
    this.searchingTerm = "";
  }
  
  setInputState(event) {
    this.setState({ term: event.target.value });
  }

    
    onInputChange(term){
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }
    
  render() {
    return (
      <div className="class_cmp_search_bar">
      
        <button className="home" onClick={event=>this.onInputChange("")}>YT</button>
       
        <input 
         onChange={event=>this.setState({searchingTerm:event.target.value})}/>

        <button onClick={event=>(this.onInputChange(this.state.searchingTerm)
                        )}>Search</button>
            
      </div>
    );
  }
}
    


export default SearchBar;