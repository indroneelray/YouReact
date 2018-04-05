import React from 'react';

const VideoDetail = ({video}) => {
    
    const videoID = video.id.videoId;
    
    return (
    <div className = "video-detail col-mid-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item"></iframe>
            </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
        );

};


export defualt VideoDetail;