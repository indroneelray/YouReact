 import React from 'react'; //to be able to use React.render, otherwise console shows React not defined, for writing code
 import ReactDOM from 'react-dom'; //for rendering it in html in the DOM

 import SearchBar from './components/class_cmp_search_bar';

 import YTSearch from 'youtube-api-search';

 import VideoList from './components/video_list';

 import VideoDetails from './components/video_details';


//YouTube API Key
const API_KEY = 'AIzaSyDAljgAGJatnX0qGc9PN9GwnYRkaK50w9k';



class App extends React.Component{
        constructor(props){
            super(props); 
            this.state = {
                videos: [],
                selectedVideo: null,
                searchingTerm: ""
            };
            this.videoSearch("John Mayer");
    }

      
    videoSearch(term){
        YTSearch({key: API_KEY, term:term}, (videos) => {     //videos is a function, can be called anything
                this.setState({videos: videos,
                              selectedVideo: videos[0]});
        });

    }
    render(){
        return (
        <div>
        <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo=>this.setState({selectedVideo:selectedVideo})}
            videos={this.state.videos}/>
        </div>
        );
    }
}


//Take these components' generated html and put it on the page (i.e. in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));//<App /> creates an instance of app i.e. initialised, second arguement tells react where to render the html, in this case , to be rendered in the container class 
