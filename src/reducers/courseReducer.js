/**
 * Copyright (c) 6/6/2016 Virtual Object Sv AB
 * Created by Orhan Mekic on 6/6/2016.
 */

import actions from '../constants/actionTypes.js';
import initialState from './initalState.js';

export default function courseReducer(state = initialState.courses, action = null) {
   switch (action.type) {
      case actions.LOAD_COURSES_SUCCESS:
         return action.courses;

      case actions.CREATE_COURSE_SUCCESS:
         // we create a new array and use spread operator to get all previous courses and we add the new course to new array
         // Note this is needed as state is imutable and can not be updated, this is a requirement from the
         // framework
         return [
            ...state,
            Object.assign({}, action.course)
         ];

      case actions.UPDATE_COURSE_SUCCESS:
         //we need to filter out the course that is being updated
         return [
            ...state.filter(course => course.id !== action.course.id),
            Object.assign({}, action.course)
         ];

      default:
         return state;
   }
}
