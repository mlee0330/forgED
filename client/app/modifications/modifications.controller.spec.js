'use strict';

describe('Controller: ModificationsCtrl', function () {

  // load the controller's module
  beforeEach(module('hrr10MjbeApp'));

  var ModificationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModificationsCtrl = $controller('ModificationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
