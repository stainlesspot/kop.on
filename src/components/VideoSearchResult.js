import React from 'react';

class VideoSearchResult extends React.Component {
  render(){
    return (
      <div className="video-search-result">
        <img src={this.props.thumbnails.default.url}/>
        <div className="text">
          <h4>{this.props.title}</h4>
          <h5>{this.props.channelTitle}</h5>
          <p>{this.props.description}</p>
        </div>
        <button>Request</button>
      </div>
    );
  }
}

export default VideoSearchResult;
