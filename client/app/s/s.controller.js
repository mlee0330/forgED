'use strict';

angular.module('hrr10MjbeApp')
  .controller('SCtrl', function ($scope, Problems) {
    $scope.message = 'Hello';
    $scope.type = Problems.currentProblemSet();
  });
