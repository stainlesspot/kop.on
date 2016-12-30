import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VideoSearchForm from '../components/VideoSearchForm';
import VideoSearchResults from '../components/VideoSearchResults';
import * as actions from '../actions/videoSearchActions';

import '../styles/video-requester-page.scss';

class VideoRequesterPage extends React.Component {
  render() {
    let VideoSearchResultsComponent;

    if(this.props.videoRequester.searchResults.count !== 0){
      VideoSearchResultsComponent = (
        <VideoSearchResults videos={this.props.videoRequester.searchResults.videos}
                            />
      );
    }

    return (
      <div className="request-page">
        <VideoSearchForm value={this.props.videoRequester.searchResults.query}
                         searchForVideos={this.props.actions.searchForVideos}
                         updateSearchQueryCache={this.props.actions.updateSearchQueryCache}
                         />
        {VideoSearchResultsComponent}
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
