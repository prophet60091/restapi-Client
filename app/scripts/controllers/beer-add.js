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

      Beer.post($scope.beers).then(function(response) {
         $location.path('/beer');
      },function(response){
        console.log( response);
        //we got a bad response - i.e. something what not filled out
        if(response.status == 400){
          //do some stuff with it
          $scope.failed = true;
          $scope.failMessage = response.data.errors.name.path + " is required";
        }
      });
    };
  });
