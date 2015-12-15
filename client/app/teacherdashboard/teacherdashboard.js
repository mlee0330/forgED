'use strict';

angular.module('hrr10MjbeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacherdashboard', {
        url: '/teacherdashboard',
        templateUrl: 'app/teacherdashboard/teacherdashboard.html',
        controller: 'TeacherdashboardCtrl'
      });
  });
