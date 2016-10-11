'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerViewCtrl
 * @description
 * # BeerViewCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerViewCtrl', function (
    $scope,
    $routeParams,
    Beer
  ) {
    $scope.viewBeer = true;
    //$scope.beers = Beer.one($routeParams.id).get().$object;

    Beer.one($routeParams.id).get().then(function(data) {
      $scope.beers = data;
    });

  });
'use strict';


