import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import './favicon.ico';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

console.log('Server is here now!');

render(
	<Provider store={store}>
    <Router history={history} routes={routes} />
	</Provider>, document.getElementById('app')
);
