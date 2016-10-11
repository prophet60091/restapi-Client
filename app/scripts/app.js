'use strict';

/**
 * @ngdoc overview
 * @name newClientApp
 * @description
 * # newClientApp
 *
 * Main module of the application.
 */
angular
  .module('newClientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:8080/');
    // RestangularProvider.setJsonp(true);
    // RestangularProvider.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
    // RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    //   console.log("````````````````");
    //   console.log(data);
    //   console.log(operation);
    //   console.log(what);
    //   console.log(url);
    //   console.log(response);
    //   console.log(deferred);
    //   console.log("````````````````");
    // });
    // RestangularProvider.setFullResponse(true);
    // RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    //   var extractedData;
    //   if (operation === "getList") {
    //     extractedData = data.result;
    //   } else {
    //     extractedData = data;
    //   }
    //   return extractedData;
    // });
    //do some error handling///
    // RestangularProvider.setErrorInterceptor(
    //   function(response, deferred, responseHandler) {
    //     var generalHandlerTimer = $timeout(function(){
    //       generalErrorHanding(response);
    //     },1);
    //     response.cancelGeneralHandler = function(){
    //       $timeout.cancel(generalHandlerTimer);
    //       console.log(response);
    //     };
    //     return true; // continue the promise chain
    //   }
    // );

    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/beer', {
        templateUrl: 'views/beer.html',
        controller: 'BeerCtrl',
        controllerAs: 'beer'
      })
      .when('/create/beer', {
        templateUrl: 'views/beer-add.html',
        controller: 'BeerAddCtrl',
        controllerAs: 'beerAdd'
      })
      .when('/beer/:id', {
        templateUrl: 'views/beer-view.html',
        controller: 'BeerViewCtrl',
        controllerAs: 'beerView'
      })
      .when('/beer/:id/delete', {
        templateUrl: 'views/beer-delete.html',
        controller: 'BeerDeleteCtrl',
        controllerAs: 'beerDelete'
      })
      .when('/beer/:id/edit', {
        templateUrl: 'views/beer-edit.html',
        controller: 'BeerEditCtrl',
        controllerAs: 'beerEdit'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .factory('BeerRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Beer', function(BeerRestangular){
    return BeerRestangular.service('beer') // The actual api resource from whence it pulls
  });
