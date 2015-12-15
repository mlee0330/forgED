'use strict';

(function() {

  class SController {
    constructor(Problems, Skills) {
      this.complete = 'false';
      this.type = Problems.currentProblemSet();
      this.Skills = Skills;
      this.skills = Skills.getUserSkills();
    }

    finish() {
      console.log(this.correct);
      console.log(this.complete);
      if (this.complete === 'true') {
        this.Skills.completeSkill();
      }
    }
  }

  angular.module('hrr10MjbeApp')
    .controller('SCtrl', SController);

})();
