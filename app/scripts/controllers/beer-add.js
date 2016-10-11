'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerAddCtrl
 * @description
 * # BeerAddCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerAddCtrl', function (
    $scope,
    Beer,
    $location
  ) {
    // $scope.beer = {};
    $scope.saveBeer = function() {

      Beer.post($scope.beer).then(function() {
         $location.path('/beer');
      });
    };
  });
