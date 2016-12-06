import actions from '../constants/actionTypes.js';
import AuthorApi from '../api/interface/AuthorApi.js';
import {beginAjaxCall} from './ajaxStatusActions.js';
import toastr from 'toastr';

export function loadAuthorsSuccess(authors) {
   return {
      type: actions.LOAD_AUTHORS_SUCCESS,
      authors  //in ES6 this is same as couse: course
   };
}

export function loadAuthorsApi() {
   return dispatch => {
      dispatch(beginAjaxCall());
      return (
         AuthorApi.getAllAuthors()
            .then(authors => {
                  dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
               toastr.error(error);
            })
      );
   };
}
