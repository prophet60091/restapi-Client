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
    $scope.beers = {};

    $scope.saveBeer = function() {
      Beer.post($scope.beers).then(function() {
         $location.path('/beer');
      });
    };
  });
