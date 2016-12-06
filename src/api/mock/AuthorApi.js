

import conf from './../config/default.js';
import authors from './data/AuthorsData.js';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
   return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

function AuthorApi () {

   this.hello = 4;

   this.getAllAuthors = function(resolve, reject) {
      setTimeout(
         () => {
            resolve(Object.assign([], authors));
         },
         conf.delay
      );
   };

   this.saveAuthor = function(resolve, reject, author) {
      setTimeout(
         () => {
            // Simulate server-side validation
            const minAuthorNameLength = 3;
            if (author.firstName.length < minAuthorNameLength) {
               reject(`First Name must be at least ${minAuthorNameLength} characters.`);
            }

            if (author.lastName.length < minAuthorNameLength) {
               reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
            }

            if (author.id) {
               //find idex
               const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
               //the last line could have neen this I think:
               //authors[existingAuthorIndex] = author;
               //delete index and add modified author
               authors.splice(existingAuthorIndex, 1, author);
            } else {
               //Just simulating creation here.
               //The server would generate ids for new authors in a real app.
               //Cloning so copy returned is passed by value rather than by reference.
               author.id = generateId(author);
               authors.push(author);
            }

            resolve(Object.assign({}, author));
         },
         conf.delay
      );

   };

   this.deleteAuthor = function(resolve, reject, authorId) {
      setTimeout(
         () => {
            const indexOfAuthorToDelete = authors.findIndex(author => {
               author.authorId == authorId;
            });
            authors.splice(indexOfAuthorToDelete, 1);
            resolve();
         },
         conf.delay
      );
   };
}

export default new AuthorApi();
