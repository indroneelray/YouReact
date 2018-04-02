 import React from 'react'; //to be able to use React.render, otherwise console shows React not defined, for writing code
 import ReactDOM from 'react-dom'; //for rendering it in html in the DOM

 import SearchBar from './components/class_cmp_search_bar';

 import YTSearch from 'youtube-api-search';


//YouTube API Key
const API_KEY = 'AIzaSyCkNmXk3TDv6VRcweNwogta7FGXemEcJ_U';



class App extends React.Component{
        constructor(props){
            super(props);
            
            this.state = {
                videos: []
            };
            
    YTSearch({key: API_KEY, term:'surfboards'}, (searchResult) => {     //videos is a function, can be called anything
                this.setState({
                    videos: data
                });
});

        }
    
}


//Take these components' generated html and put it on the page (i.e. in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));//<App /> creates an instance of app i.e. initialised, second arguement tells react where to render the html, in this case , to be rendered in the container class 
