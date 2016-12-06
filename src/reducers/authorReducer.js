/**
 * Copyright (c) 6/6/2016 Virtual Object Sv AB
 * Created by Orhan Mekic on 6/6/2016.
 */

import actions from '../constants/actionTypes.js';
import initialState from './initalState.js';

export default function authorReducer(state = initialState.authors, action = null) {
   switch (action.type) {
      case actions.LOAD_AUTHORS_SUCCESS:
         return action.authors;
      default:
         return state;
   }
}
