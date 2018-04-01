 import React from 'react'; //to be able to use React.render, otherwise console shows React not defined, for writing code
 import ReactDOM from 'react-dom'; //for rendering it in html in the DOM

 import SearchBar from './components/class_cmp_search_bar';


//YouTube API Key
const API_KEY = 'AIzaSyCkNmXk3TDv6VRcweNwogta7FGXemEcJ_U';



//Create new component
//This component should produce some html
const App = () => {     //This function is considered a class which needs to be initialised
    return (
        <div>Search:
        <SearchBar />
            </div>
    );
} 

//const App = function() {        
//    return <div>Hi!</div>;    
//Another way of writing the above function , the former is a more common way in react
//}



//Take these components' generated html and put it on the page (i.e. in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));//<App /> creates an instance of app i.e. initialised, second arguement tells react where to render the html, in this case , to be rendered in the container class 
