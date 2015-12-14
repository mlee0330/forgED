'use strict';

(function() {

  class MainController {

    constructor($http, $state, Problems) {
      this.$http = $http;
      this.$state = $state;
      this.Problems = Problems;
      this.awesomeThings = [];

      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

    go() {
      this.Problems.setCurrentProblemSet(this.userselection);
      this.$state.go('s');
    }

  }

  angular.module('hrr10MjbeApp')
    .controller('MainController', MainController);

})();
