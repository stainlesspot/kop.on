import React from 'react';

class VideoSearchResult extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.thumbnails.default.url}/>
        <h3>{this.props.title}</h3>
        <h5>{this.props.channelTitle}</h5>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default VideoSearchResult;
