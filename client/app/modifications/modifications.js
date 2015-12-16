'use strict';

angular.module('hrr10MjbeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modifications', {
        url: '/modifications',
        templateUrl: 'app/modifications/modifications.html',
        controller: 'ModificationsCtrl'
      });
  });
