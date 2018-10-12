import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/styles.css'
// import App from './auth/App';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './reducers';

// Notes for Redux Deve tools:  https://github.com/zalmoxisus/redux-devtools-extension
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

// router notes at:
// https://reacttraining.com/react-router/core/api/Router

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(Reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
