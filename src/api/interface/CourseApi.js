

import conf from './../config/default.js';
import mCourseApi from './../mock/CourseApi.js';
import lCourseApi from './../live/CourseApi.js';

function getApi() {
   if(conf.shouldMock) {
      return mCourseApi;
   }
   return lCourseApi;
}

class CourseApi {

   static getAllCourses() {
      return new Promise(
         (resolve, reject) => {
            getApi().getAllCourses(resolve, reject);
         }
      );
   }

   static saveCourse(course) {
      course = Object.assign({}, course); // to avoid manipulating object passed in.
      return new Promise(
         (resolve, reject) => {
            getApi().saveCourse(resolve, reject, course);
         }
      );
   }

   static deleteCourse(courseId) {
      return new Promise(
         (resolve, reject) => {
            getApi().deleteCourse(resolve, reject, courseId);
         }
      );
   }
}

export default CourseApi;
