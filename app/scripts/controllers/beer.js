'use strict';

/**
 * @ngdoc function
 * @name newClientApp.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the newClientApp
 */
angular.module('newClientApp')
  .controller('BeerCtrl', function ($scope, Beer, Restangular, $http, $sce, $resource) {
    // $scope.beers = [{
    //   "name": "Modus Hoparandi",
    //   "brewery": "Ska",
    //   "style": "IPA",
    //   "origin": "Durango, Colorado",
    //   "location": ""
    // }
    // ];

    // Restangular.one('beer', '57f960dfb722d0350c11120b').get().then(function(data) {
    //   console.log("WTF------------------" +JSON.stringify(data, null, 2));
    //   console.log("WTF------------------");
    // });
    var test =$sce.trustAsUrl('http:localhost:8080/beer');
    //console.log(test);

    // $http.get( $sce.getTrustedResourceUrl(test)).success(function(data) {
    //   console.log(data);
    // });

    var beers =  $resource("http:localhost:8080/beer")
    beers.query().$promise.then(function(ubeer) {
      console.log(ubeer);
    });

    // Restangular.all('beer').getList().then(function(beers) {
    //   console.log("resp:" + beers);
    //
    //   });

    Beer.getList().then(function(result) {
      $scope.beers = result;
      console.log("resp:" + $scope.beers);
    });
    // $scope.beers = Beer.getList().$object;
    //   console.log($scope.beer);
  });
