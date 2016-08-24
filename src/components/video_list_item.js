import React from 'react'

    // passing in video is same as doing line 5
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  // line 4 is same as
  // const video = props.video
  // const onVideoSelect = props.onVideoSelect
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
