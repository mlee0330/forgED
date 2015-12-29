'use strict';

(function() {

  class MainController {

    constructor($http, $state, Skills, Student) {
      this.$http = $http;
      this.$state = $state;
      this.Skills = Skills;
      Skills.getSkills(function(skills) {
        this.skills = skills;
        this.skillsData = JSON.stringify(skills);
        console.log(skills);
        //Student.addOrUpdateSkill(skills[0]._id, 4);
        //Student.awardBadges();
        //console.log(skills);
      }.bind(this));
      this.awesomeThings = [];

      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
      });

      Student.getSkillRoot(function(root) {
        Skills.getSkillTree(root, function(tree) {
          this.treeData = tree;
        }.bind(this));
      }.bind(this))

      Student.getSkills(function(skills) {
        this.studentSkills = skills;
        this.studentSkillsData = JSON.stringify(skills);
      }.bind(this));
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
      this.$state.go('s', {
        id: this.userselection
      });
    }

    polymerChange() {
      if (this.userselection) {
        this.go();
      }
    }
  }

  angular.module('hrr10MjbeApp')
    .controller('MainController', MainController);

})();
