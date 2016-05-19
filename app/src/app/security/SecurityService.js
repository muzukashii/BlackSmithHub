
(function () {
  'use strict';
  angular
    .module('app')
    .factory('registerService', registerService)
    .factory('UserService', UserService);

  /** @ngInject */
  function UserService($resource) {
    return $resource ('/user/:action', {},
      {
        authenticate: {
          method: 'POST',
          params: {'action': 'authenticate'},
          header: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      })
  }

  /** @ngInject */
  function registerService($resource){
    return $resource('/regis', {}, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }});

  }

})();
