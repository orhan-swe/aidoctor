/**
 * Copyright (c) 6/6/2016 Virtual Object Sv AB
 * Created by Orhan Mekic on 6/6/2016.
 */

import actions from '../constants/actionTypes.js';
import initialState from './initalState.js';

export default function patientReducer(state = initialState.patients, action = null) {
   switch (action.type) {
      case actions.LOAD_PATIENTS_SUCCESS:
         return action.patients;

      default:
         return state;
   }
}
