'use strict';

angular.module('hrr10MjbeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('badges', {
        url: '/badges',
        templateUrl: 'app/badges/badges.html',
        controller: 'BadgesCtrl'
      });
  });
