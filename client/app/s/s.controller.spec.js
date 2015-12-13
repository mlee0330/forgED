'use strict';

describe('Controller: SCtrl', function () {

  // load the controller's module
  beforeEach(module('hrr10MjbeApp'));

  var SCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SCtrl = $controller('SCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
