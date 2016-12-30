import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import VideoRequestPage from './containers/VideoRequesterPage';
import NowPlayingPage from './components/NowPlayingPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={VideoRequestPage}/>
    <Route path="/playing" component={NowPlayingPage}/>
  </Route>
);
