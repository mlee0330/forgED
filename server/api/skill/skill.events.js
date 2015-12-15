/**
 * Skill model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Skill = require('./skill.model');
var SkillEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SkillEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Skill.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SkillEvents.emit(event + ':' + doc._id, doc);
    SkillEvents.emit(event, doc);
  }
}

module.exports = SkillEvents;
