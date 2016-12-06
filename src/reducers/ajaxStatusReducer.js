/**
 * Copyright (c) 6/6/2016 Virtual Object Sv AB
 * Created by Orhan Mekic on 6/6/2016.
 */

import actions from '../constants/actionTypes.js';
import initialState from './initalState.js';

//check if this action is ajax reply
function actionTypeEndsInSuccess(type) {
   return type.substring(type.length - 8) === "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action = null) {
   if (action.type == actions.BEGIN_AJAX_CALL) {
      return state + 1;
      //check if this action is ajax reply
   } else if (action.type == actions.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
      return state - 1;
   }
   return state;
}
