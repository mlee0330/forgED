'use strict';

describe('Controller: TeacherdashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('hrr10MjbeApp'));

  var TeacherdashboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherdashboardCtrl = $controller('TeacherdashboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
