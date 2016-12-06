

import conf from './../config/default.js';
import courses from './data/CoursesData.js';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


class Helper {

   static replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
   }

//This would be performed on the server in a real app. Just stubbing in.
   static generateId(course) {
      return this.replaceAll(course.title, ' ', '-');
   }


}

class CourseApi {


   static getAllCourses(resolve, reject) {
      setTimeout(
         () =>
            resolve(Object.assign([], courses))
         ,
         conf.delay
      );
   }

   static saveCourse(resolve, reject, course) {
      setTimeout(
         () => {
            // Simulate server-side validation
            const minCourseTitleLength = 1;
            if (course.title.length < minCourseTitleLength) {
               reject(`Title must be at least ${minCourseTitleLength} characters.`);
            }

            if (course.id) {
               const existingCourseIndex = courses.findIndex(a => a.id == course.id);
               courses.splice(existingCourseIndex, 1, course);
            } else {
               //Just simulating creation here.
               //The server would generate ids and watchHref's for new courses in a real app.
               //Cloning so copy returned is passed by value rather than by reference.
               course.id = Helper.generateId(course);
               course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
               courses.push(course);
            }

            resolve(course);
         },
         conf.delay
      );
   }



   static deleteCourse(resolve, reject, courseId) {
      setTimeout(
         () => {
            const indexOfCourseToDelete = courses.findIndex(course => {
               course.courseId == courseId;
            });
            courses.splice(indexOfCourseToDelete, 1);
            resolve();
         },
         conf.delay
      );
   }
}

export default CourseApi;



