'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerDeleteCtrl
 * @description
 * # BeerDeleteCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerDeleteCtrl', function (
    $scope,
    $routeParams,
    Beer,
    $location
  ) {

    $scope.show = false;

    $scope.beers = Beer.one($routeParams.id).get().$object;
    $scope.deleteBeer = function() {
      $scope.beers.remove().then(function() {
        $location.path('/beer');
      });
    };
    $scope.back = function() {
      $location.path('/beer/' + $routeParams.id);
    };
  });
