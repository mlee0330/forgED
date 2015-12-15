'use strict';

describe('Controller: BadgesCtrl', function () {

  // load the controller's module
  beforeEach(module('hrr10MjbeApp'));

  var BadgesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BadgesCtrl = $controller('BadgesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
