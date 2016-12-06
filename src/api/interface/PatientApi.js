

import conf from './../config/default.js';
import mApi from './../mock/PatientApi.js';
import lApi from './../live/PatientApi.js';

function getApi() {
   if(conf.shouldMock) {
      return mApi;
   }
   return lApi;
}

class PatientApi {

   static getAllPatients() {
      return getApi().getAllPatients();
   }

}

export default PatientApi;
