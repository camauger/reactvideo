import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="card">
      <img
      className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
     <div className="card-body">
         <h5 className="card-title"> {video.snippet.title}</h5>
     </div>
    </div>
  );
};

export default VideoItem;
