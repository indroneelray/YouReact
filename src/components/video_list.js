//since it doesnt record any user action, we can make it a plain functional component

import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) =>{
   const videoItems = props.videos.map((video)=>{
        
       return(
       <VideoListItem 
       onVideoSelect={props.onVideoSelect}
       key={video.etag} 
       video={video} />
    );
       
});
    
    return (
           
           <ul className="col-md-4 list-group">
        Click on a video to play it...
        {videoItems}
               </ul>
       );
}


export default VideoList;
