

const errorMessage = {message: "No Server implementation for CourseApi"};

class CourseApi {

   get uri() {
      return "/courses";
   }


   static getAllCourses(resolve, reject) {
      reject(errorMessage.message + " getAllCourses");
      return;
      //Ajax.get(uri())
       //  .success(resolve(data.courses))
        // .fail(sender, message, details);
   }

   static saveCourse(resolve, reject, course) {
      reject(errorMessage.message + " saveCourse");
      return;
      //Ajax.post(uri())
       //  .success(resolve(data.course))
        // .fail(sender, message, details);
   }

   static deleteCourse(resolve, reject, courseId) {
      reject(errorMessage.message + " deleteCourse");
      return;
      //Ajax.delete(uri())
       //  .success(resolve(data.course))
        // .fail(sender, message, details);
   }
}

export default CourseApi;
