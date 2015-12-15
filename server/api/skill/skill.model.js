'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
  name: String,
  info: String,
  problemGenId: Number,
  active: Boolean
});

module.exports = mongoose.model('Skill', SkillSchema);
