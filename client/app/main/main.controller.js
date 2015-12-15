'use strict';

(function() {

  class MainController {

    constructor($http, $state, Skills) {
      this.$http = $http;
      this.$state = $state;
      this.Skills = Skills;
      Skills.getUserSkills(function(skills) {
        this.skills = skills;
      }.bind(this));
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
      this.Skills.setActiveSkill(this.userselection);
      this.$state.go('s');
    }

  }

  angular.module('hrr10MjbeApp')
    .controller('MainController', MainController);

})();
