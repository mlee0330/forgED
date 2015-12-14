'use strict';

//we may eventually want to abstract all the problem generation into here. for now, it's pretty simple

angular.module('hrr10MjbeApp')
  .service('Problems', function () {
    var current;
    this.currentProblemSet = function() {
      return current;
    }
    this.setCurrentProblemSet = function(set) {
      current = set;
    }
  });
