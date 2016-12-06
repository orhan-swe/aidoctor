import actions from '../constants/actionTypes.js';
import CourseApi from '../api/interface/CourseApi.js';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions.js';

//TODO: dispatch(beginAjaxCall()); should be moved to centrolized place like mockAPI
//but note in case you have optamistic api call (not waiting for reply) int that case
//you may not want to dispatch beginAjaxCall

export function loadCoursesSuccess(courses) {
   return {
      type: actions.LOAD_COURSES_SUCCESS,
      courses  //in ES6 this is same as course: course
   };
}

export function updateCourseSuccess(course) {
   return {
      type: actions.UPDATE_COURSE_SUCCESS,
      course  //in ES6 this is same as course: course
   };
}
export function createCourseSuccess(course) {
   return {
      type: actions.CREATE_COURSE_SUCCESS,
      course  //in ES6 this is same as course: course
   };
}


export function loadCoursesApi() {
   return function (dispatch) {
      dispatch(beginAjaxCall());
      return (
         CourseApi.getAllCourses()
            .then(
               courses => {
               dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
               throw(error);
            })
      );
   };
}

export function saveCourseApi(course) {
   //you could use getState to check state in redux store
   return (dispatch, getState) => {
      dispatch(beginAjaxCall());
      return (
         CourseApi.saveCourse(course)
            //promise will return savedCourse to us
            .then(
               savedCourse => {
               course.id ?
                  dispatch(updateCourseSuccess(savedCourse)) :
                  dispatch(createCourseSuccess(savedCourse));
            })
            .catch(
               //the promise will return the error
               error => {
                  dispatch(ajaxCallError(error));
                  //we could dispatch new event here or it seems that catch will return the propmis
                  //so it can be handled whereever this method is called from
                  throw(error);
            })
      );
   };
}
