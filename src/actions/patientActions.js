import actions from '../constants/actionTypes.js';
import PatientApi from '../api/interface/PatientApi.js';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions.js';

//TODO: dispatch(beginAjaxCall()); should be moved to centrolized place like mockAPI
//but note in case you have optamistic api call (not waiting for reply) int that case
//you may not want to dispatch beginAjaxCall

export function loadPatientsSuccess(patients) {
   return {
      type: actions.LOAD_PATIENTS_SUCCESS,
      patients  //in ES6 this is same as course: course
   };
}


export function loadPatientsApi() {
   return function (dispatch) {
      dispatch(beginAjaxCall());
      return (
         PatientApi.getAllPatients()
            .then(
               patients => {
               dispatch(loadPatientsSuccess(patients));
            })
            .catch(error => {
               throw(error);
            })
      );
   };
}

