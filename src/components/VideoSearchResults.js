import React from 'react';

import VideoSearchResult from './VideoSearchResult';
import '../styles/video-search-results.scss';

class VideoSearchResults extends React.Component {
  render() {
    return (
      <div className="video-search-results">
        {this.props.videos.map(video => (
          <VideoSearchResult {...video} key={video.id}/>
        ))}
      </div>
    );
  }
}

export default VideoSearchResults;
