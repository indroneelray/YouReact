import React from 'react';


/*const titleStyle={
        color: 'blue',
        padding:"10px"
    };
    
    const descriptionStyle = {
        backgroundColor: 'coral',
        padding:"10px",
        borderRadius:"25px"
    };
*/

const VideoDetails = ({video}) => {
    
    if(!video){
            return <div>Loading..</div>;
    }
    
    const videoID = video.id.videoId;
    const url = 'https://www.youtube.com/embed/'+videoID;
    
    return (
    <div className = "video-detail col-mid-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src={url} allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
            </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
        );

};


export default VideoDetails;