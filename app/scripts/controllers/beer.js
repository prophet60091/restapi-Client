'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerCtrl', function ($scope, Beer, Restangular) {
    // $scope.beers = [{
    //   "name": "Modus Hoparandi",
    //   "brewery": "Ska",
    //   "style": "IPA",
    //   "origin": "Durango, Colorado",
    //   "location": ""
    // }
    // ];

    Restangular.one('beer', '57f960dfb722d0350c11120b').get().then(function(data) {
      console.log("WTF------------------" +JSON.stringify(data, null, 2));
      console.log("WTF------------------");
    });

    Beer.getList().then(function(data) {
      $scope.beers = data;
      console.log("resp:" + $scope.beers);
    });
    // $scope.beers = Beer.getList().$object;
    //   console.log($scope.beer);
  });
