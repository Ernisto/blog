'use strict';
const angular = require('angular');

/*@ngInject*/
export function blogServiceService($http) {
  var blogAPI = '/api/blogs';

  // Public API here
  return {
    get() {
      return $http.get(`${blogAPI}`);
    },
    getById(id) {
      return $http.get(`${blogAPI}/${id}`);
    }
  };
}


export default angular.module('blogApp.blogService', [])
  .factory('blogSvr', blogServiceService)
  .name;
