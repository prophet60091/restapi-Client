'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerEditCtrl
 * @description
 * # BeerEditCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerEditCtrl', function (
    $scope,
    $routeParams,
    Beer,
    $location
  ) {

    $scope.editBeer = true;
    $scope.show = true;
    $scope.beers = {};
    Beer.one($routeParams.id).get().then(function(beer) {
      $scope.beers = beer;

      $scope.saveBeer = function() {
        $scope.beers.save().then(function() {
           $location.path('/beer/' + $routeParams.id);
        });
      };
    });
  });
