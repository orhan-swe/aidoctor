/**
 * Copyright (c) 6/6/2016 Virtual Object Sv AB
 * Created by Orhan Mekic on 6/6/2016.
 */

import {combineReducers} from 'redux';
import courses from './courseReducer.js';
import authors from './authorReducer.js';
import patients from './patientReducer.js';
import numAjaxCallsInProgress from './ajaxStatusReducer.js';
import '../../node_modules/toastr/build/toastr.min.css';

//list all reducers for Redux (note needed when having more than one reducer, also
// it is good if they are mapped against what you have in initalState.js)
const rootReducer = combineReducers({
   courses,  //same as "courses: courses" in ES5
   authors,
   patients,
   numAjaxCallsInProgress
});

export default rootReducer;
