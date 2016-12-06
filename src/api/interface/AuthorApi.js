

import conf from './../config/default.js';
import mAuthorApi from './../mock/AuthorApi.js';
import lAuthorApi from './../live/AuthorApi.js';

function getApi() {
   if(conf.shouldMock) {
      return mAuthorApi;
   }
   return lAuthorApi;
}

class AuthorApiI{

   constructor(api) {
      this.api = api;
   }

   getAllAuthors() {
      return new Promise(
         (resolve, reject) => {
            this.api.getAllAuthors(resolve, reject);
         }
      );
   }

   saveAuthor(author) {
      author = Object.assign({}, author); // to avoid manipulating object passed in.
      return new Promise(
         (resolve, reject) => {
            this.api.saveAuthor(resolve, reject, author);
         }
      );
   }

   deleteAuthor(courseId) {
      return new Promise(
         (resolve, reject) => {
            this.api.deleteAuthor(resolve, reject, courseId);
         }
      );
   }
}

export default new AuthorApiI(getApi());
