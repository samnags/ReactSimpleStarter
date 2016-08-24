// doesn't need to hold state, so it will just be a functional component

import React from 'react';
import VideoListItem from './video_list_item';

// props argument comes from parent App passing it
const VideoList = (props) => {
  const VideoItems = props.videos.map((video) => {

    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}

        // taking prop from app and passing it down to videoListItem
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
}

export default VideoList;
