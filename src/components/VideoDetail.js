import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="col-sm-12 col-md-8">
    <div className="video-detail card">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src={videoSrc}
          title={video.snippet.title}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title"> {video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div></div>
  );
};

export default VideoDetail;
