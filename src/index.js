// Set up your application entry point here...
import 'babel-polyfill'; // extra ES6 features, will take 50k
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import { Router, hashHistory  } from 'react-router';
import {loadCoursesApi} from './actions/courseActions.js';
import {loadAuthorsApi} from './actions/authorActions.js';
import {loadPatientsApi} from './actions/patientActions.js';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './styles/styles.css'; //webpack imorts CSS files too!;

//no initial state needed, that is handled by our reducers
const store = configureStore();
store.dispatch(loadCoursesApi());
store.dispatch(loadPatientsApi());
store.dispatch(loadAuthorsApi());

//Provider is used to connect redux-Store with React, eg attaches app to the store
render(
   <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
   </Provider>,
   document.getElementById('app')
);
