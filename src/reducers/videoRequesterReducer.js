import objectAssign from 'object-assign';

import { UPDATE_SEARCH_QUERY_CACHE, UPDATE_SEARCH_RESULTS } from '../constants/actionTypes';
import initialState from './initialState';

export default function videoRequestReducer(state = initialState.videoRequester, action) {
  let newState;

  switch (action.type){
    case UPDATE_SEARCH_QUERY_CACHE:
      newState = objectAssign({}, state);
      newState.searchResults = objectAssign({}, state.searchResults, {query: action.value});
      return newState;

    case UPDATE_SEARCH_RESULTS:
      newState = objectAssign({}, state);
      newState.searchResults = objectAssign({}, state.searchResults, {
        count: action.videos.length,
        resultsPerPage: action.resultsPerPage,
        nextPageToken: action.nextPageToken,
        videos: action.videos
      });
      return newState;

    default:
      return state;
  }
}
