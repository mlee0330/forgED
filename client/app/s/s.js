'use strict';

angular.module('hrr10MjbeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('s', {
        url: '/s',
        templateUrl: 'app/s/s.html',
        controller: 'SCtrl'
      });
  });
