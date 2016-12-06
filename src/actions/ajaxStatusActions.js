


import actions from './../constants/actionTypes';

export function beginAjaxCall() {
   return {type: actions.BEGIN_AJAX_CALL};
}

export function ajaxCallError(error) {
   return {
      type: actions.AJAX_CALL_ERROR,
      error
   };
}

