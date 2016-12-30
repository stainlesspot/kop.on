import React, { PropTypes } from 'react';

class VideoSearchForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.waitThenSubmitInput = this.waitThenSubmitInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  waitThenSubmitInput(event) {
    this.props.searchForVideos(event.target.value, true);
  }

  submitInput(event) {
    event.preventDefault();
    this.props.searchForVideos(event.target[0].value);
  }

  render() {
    return (
      <form onSubmit={this.submitInput}>
        <input type="text" placeholder="Search..."
               autoFocus={this.props.value !== ''}
               defaultValue={this.props.value}
               onInput={this.waitThenSubmitInput}
               />
      </form>
    );
  }
}

VideoSearchForm.propTypes = {
  updateSearchQueryCache: PropTypes.func.isRequired,
  searchForVideos: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default VideoSearchForm;
