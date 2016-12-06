

import conf from './../config/default.js';


class Ajax {

   get url() {
      return conf.url;
   }

   static _generic(action, data, uri) {
      let json_data = JSON.stringify(data);
      return {
         type: action,
         url: this.url() + uri,
         data: json_data,
         dataType: "json",
         contentType: "application/json;charset=utf-8"
      }
   }

   static get(uri, data) {
      return $.ajax(_generic("GET", data, uri));
   }

   static put(uri, data) {
      return $.ajax(_generic("PUT", data, uri));
   }

   static post(uri, data) {
      return $.ajax(_generic("POST", data, uri));
   }

   static delete(uri, data) {
      return $.ajax(_generic("DELETE", data, uri));
   }

}

export default Ajax;
