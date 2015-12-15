'use strict';

angular.module('hrr10MjbeApp')
  .service('Skills', function($http, Auth, Problems) {
    this.skills = undefined;
    this.activeSkill = undefined;

    function changeSkill(newSkill) {
      this.activeSkill = newSkill;
      console.log(this.activeSkill);
      Problems.setCurrentProblemSet(newSkill.problemGenId);
    }

    this.getSkills = function(cb) {
      if (this.skills) {
        cb(this.skills);
      } else {
        $http({
          method: 'GET',
          url: '/api/skills'
        }).then(function(res) {
          this.skills = res.data;
          cb(this.skills);
        }.bind(this))
      }
    }

    this.getUserSkills = function(cb) {
      Auth.isLoggedIn(function(is) {
        if (is) {
          Auth.getCurrentUser(function(user) {
            var results = [];
            user.studentData = user.studentData || {}; //TODO demo purposes only!
            user.studentData.skills = user.studentData.skills || {};
            this.getSkills(function() {
              for (var key in user.studentData.skills) {
                results.push(this.getSkill(key));
              }
              cb(results);
            }.bind(this))

          }.bind(this));
        } else {
          cb([]);
        }
      }.bind(this))


    }

    //for now we assume this can be synchronous. might be dangerous
    this.getSkill = function(skillID) {
      for (var i = 0; i < this.skills.length; i++) {
        if (this.skills[i]._id === skillID) {
          return this.skills[i];
        }
      }
    }

    this.completeSkill = function() {
      console.log(this.activeSkill);
      Auth.updateSkill(this.activeSkill._id, 1);
      //this.activeSkill = undefined;
    }

    this.setActiveSkill = function(skillID) {
      this.getSkills(function(skills) {
        for (var i = 0; i < skills.length; i++) {
          if (skills[i]._id === skillID) {
            return changeSkill.call(this, skills[i]);
          }
        }
      }.bind(this));
    }
  });
