(function () {
  'use strict';

  angular
    .module('app')
    .controller('locationController', locationController);


  /** @ngInject */
  function locationController($http,$scope) {
    $scope.queryPromise =  $http.get('http://localhost:8080/getLocation').success(function (data) {
      // $scope.totalNetPrice= totalCalService.getTotalNetPrice(data);
      $scope.location = data;
    })



  }



})();
