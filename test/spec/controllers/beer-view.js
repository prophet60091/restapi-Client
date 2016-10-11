'use strict';

describe('Controller: BeerViewCtrl', function () {

  // load the controller's module
  beforeEach(module('newClientApp'));

  var BeerViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeerViewCtrl = $controller('BeerViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BeerViewCtrl.awesomeThings.length).toBe(3);
  });
});
