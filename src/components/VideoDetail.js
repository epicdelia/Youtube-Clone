import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <div className="iframe-container">
          <iframe
            className="responsive-iframe video-player"
            title="videoplayer"
            src={videoSrc}
          />
        </div>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title} </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
