

import conf from './../config/default.js';
import patients from './data/PatientData.js';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


class Helper {

}

class PatientApi {


   static getAllPatients(resolve, reject) {
      return new Promise(
         (resolve, reject) => {
            setTimeout(
               () =>
                  resolve(Object.assign([], patients))
               ,
               conf.delay
            );
         }
      );
   }

}

export default PatientApi;



