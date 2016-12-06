

const errorMessage = {message: "No Server implementation for CourseApi"};

class PatientApi {

   get uri() {
      return "/patients";
   }


   static getAllPatients(resolve, reject) {
      reject(errorMessage.message + " getAllPatients");
      return;
      //Ajax.get(uri())
       //  .success(resolve(data.courses))
        // .fail(sender, message, details);
   }

}

export default PatientApi;
