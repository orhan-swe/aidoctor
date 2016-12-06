


const errorMessage = {message: "No Server implementation for Author"};

class AuthorApi {

   static getAllAuthors(resolve, reject) {
      reject(errorMessage.message + " getAllAuthors");
   }

   static saveAuthor(resolve, reject, course) {
      reject(errorMessage.message + " saveAuthor");
   }

   static deleteAuthor(resolve, reject, courseId) {
      reject(errorMessage.message + " deleteAuthor");
   }
}

export default AuthorApi;
