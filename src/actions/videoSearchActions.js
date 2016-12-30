import axios from 'axios';

import * as types from '../constants/actionTypes';

export function updateSearchQueryCache(value) {
  return {
      type: types.UPDATE_SEARCH_QUERY_CACHE,
      value
    };
}

let inputBuffer;

export function searchForVideos(query, waitThenSearch) {
  return dispatch => {
    clearTimeout(inputBuffer);

    if(waitThenSearch) {
      dispatch(updateSearchQueryCache(query));

      new Promise(resolve =>
        inputBuffer = setTimeout(resolve, 1000)
      ).then(() =>
        dispatch(searchForVideos(query))
      );
    }
    else if(query !== '') {
      console.log('Started fetching search results...');
      axios.get(`/ytSearchResults?q=${query}`)
      .then(response => {
        let data = response.data;

        let videos = data.items.map((video) =>{
          let snippet = video.snippet;
          return {
            id: video.id.videoId,
            channelTitle: snippet.channelTitle,
            title: snippet.title,
            description: snippet.description,
            thumbnails: snippet.thumbnails
          };
        });

        dispatch({
          type: types.UPDATE_SEARCH_RESULTS,
          nextPageToken: data.nextPageToken,
          resultsPerPage: data.pageInfo.resultsPerPage,
          videos
        });
      });
    }
  };
}
