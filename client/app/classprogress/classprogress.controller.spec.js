'use strict';

describe('Controller: ClassprogressCtrl', function () {

  // load the controller's module
  beforeEach(module('hrr10MjbeApp'));

  var ClassprogressCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassprogressCtrl = $controller('ClassprogressCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
