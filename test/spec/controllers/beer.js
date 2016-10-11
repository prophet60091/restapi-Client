'use strict';

describe('Controller: BeerCtrl', function () {

  // load the controller's module
  beforeEach(module('newClientApp'));

  var BeerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeerCtrl = $controller('BeerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BeerCtrl.awesomeThings.length).toBe(3);
  });
});
