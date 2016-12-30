import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VideoSearchForm from '../components/VideoSearchForm';
import VideoSearchResults from '../components/VideoSearchResults';
import * as actions from '../actions/videoSearchActions';

import '../styles/video-requester-page.scss';

class VideoRequesterPage extends React.Component {
  render() {
    let videoSearchResultsComponent;

    if(this.props.videoRequester.searchResults.count !== 0){
      videoSearchResultsComponent = (
        <VideoSearchResults videos={this.props.videoRequester.searchResults.videos}
                            />
      );
    }

    return (
      <div className="request-page">
        <VideoSearchForm value={this.props.videoRequester.cache.searchQuery}
                         searchForVideos={this.props.actions.searchForVideos}
                         updateSearchQueryCache={this.props.actions.updateSearchQueryCache}
                         />
        {videoSearchResultsComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoRequester: state.videoRequester
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoRequesterPage);
